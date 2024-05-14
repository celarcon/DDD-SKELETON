import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { Controller } from '../Controller'
import { UserRetrieve } from '../../context/application/user/UserRetrieve'
import RequestCriteria from '../../context/shared/domain/types/CriterialRequest'

export default class UsersGetController implements Controller {
	constructor(private userRetrieve: UserRetrieve) {}

	async run(req: Request, res: Response) {
		const criteria: RequestCriteria = req.body
		const users = await this.userRetrieve.run(criteria)
		res.status(httpStatus.OK).json(users)
	}
}
