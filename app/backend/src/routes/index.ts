import { Router, Request, Response, NextFunction } from 'express'
import { validationResult, Result } from 'express-validator'
import glob from 'glob'
import httpStatus from 'http-status'

export function registerRoutes(router: Router): void {
	const routes = glob.sync(`${__dirname}/**/*.route.*`)
	routes.map(route => register(route, router))
}

function register(routePath: string, router: Router) {
	// eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
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
