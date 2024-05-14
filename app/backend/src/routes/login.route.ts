import { Request, Response, Router } from 'express'
import httpStatus from 'http-status'

export const register = (router: Router): void => {
	router.post('/login', (req: Request, res: Response) => {
		res.status(httpStatus.OK).send()
	})
}
