import { Router, Request, Response, NextFunction } from 'express'
import { validationResult, Result } from 'express-validator'
import { globSync } from 'glob'
import httpStatus from 'http-status'

export function registerRoutes(router: Router): void {
	console.log(`${__dirname}/**/*.route.*`)
	const routes = globSync(`${__dirname}/**/*.route.*`)
	routes.map(route => register(route, router))
}

function register(routePath: string, router: Router) {
	const { register } = require(routePath) as {
		register: (router: Router) => void
	}
	register(router)
}

export function validateReqSchema(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	const valedationErrors: Result = validationResult(req)
	const errors = valedationErrors.array()

	if (errors.length == 0) {
		return next()
	}

	return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({ errors })
}
