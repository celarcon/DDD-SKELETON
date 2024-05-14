import { UserRepository } from '../../domain/user/UserRepository'
import { User } from '../../domain/user/User'
import RequestCriteria from '../../shared/domain/types/CriterialRequest'
import { UserRetrieveResponse } from './UserRetrieveResponse'

export class UserRetrieve {
	private readonly repository: UserRepository

	constructor(repository: UserRepository) {
		this.repository = repository
	}

	async run(criteria: RequestCriteria): Promise<UserRetrieveResponse> {
		const users: [User[], number] = await this.repository.retrieve(criteria)
		const totalPagesRound: number = Math.ceil(users[1] / criteria.limit)
		const pager = {
			current: criteria.page,
			total_pages: totalPagesRound,
			total_elements: users[1],
		}
		const result: UserRetrieveResponse = {
			data: users[0].map(user => user.toPrimitives()),
			pager,
			sortedBy: criteria.sortedBy,
		}
		return result
	}
}
