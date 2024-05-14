import RequestCriteria from '../../shared/domain/types/CriterialRequest'
import { User } from './User'
import { UserId } from './attributes/UserId'

export interface UserRepository {
	save(user: User): Promise<void>
	retrieve(criteria: RequestCriteria): Promise<[Array<User>, number]>
	deleteUser(id: UserId): Promise<void>
}
