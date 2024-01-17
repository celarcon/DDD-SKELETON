import { json, urlencoded } from 'body-parser'
import compress from 'compression'
import errorHandler from 'errorhandler'
import express, { Request, Response, NextFunction } from 'express'
import Router from 'express-promise-router'
import helmet from 'helmet'
import * as http from 'http'
import httpStatus from 'http-status'
import { registerRoutes } from './routes'
import 'reflect-metadata'

export class Server {
	private readonly express: express.Express
	private readonly port: string
	private httpServer?: http.Server

	constructor(port: string) {
		this.port = port
		this.express = express()
		this.express.use(function (req, res, next) {
			res.header('Access-Control-Allow-Origin', '*')
			res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
			res.header(
				'Access-Control-Allow-Headers',
				'Origin, X-Requested-With, Content-Type, Accept',
			)
			next()
		})
		this.express.use(json())
		this.express.use(urlencoded({ extended: true }))
		this.express.use(helmet.xssFilter())
		this.express.use(helmet.noSniff())
		this.express.use(helmet.hidePoweredBy())
		this.express.use(helmet.frameguard({ action: 'deny' }))
		this.express.use(compress())
		const router = Router()
		router.use(errorHandler())
		this.express.use(router)

		registerRoutes(router)

		router.use(
			(err: Error, req: Request, res: Response, next: NextFunction): void => {
				if (err) {
					res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
				} else {
					next()
				}
			},
		)

		router.use((req: Request, res: Response): void => {
			res.status(httpStatus.OK).send('Ruta not found')
		})
	}

	async listen(): Promise<void> {
		return new Promise(resolve => {
			const env = this.express.get('env') as string
			this.httpServer = this.express.listen(this.port, () => {
				console.log(
					`  Backend App is running at http://localhost:${this.port} in ${env} mode`,
				)
				console.log('  Press CTRL-C to stop\n')
				resolve()
			})
		})
	}

	getHTTPServer(): Server['httpServer'] {
		return this.httpServer
	}

	async stop(): Promise<void> {
		return new Promise((resolve, reject) => {
			if (this.httpServer) {
				this.httpServer.close(error => {
					if (error) {
						reject(error)
						return
					}
					resolve()
				})
			}
			resolve()
		})
	}
}
