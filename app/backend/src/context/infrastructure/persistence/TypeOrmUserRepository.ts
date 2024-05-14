import { EntitySchema } from 'typeorm'
import { User } from '../../domain/user/User'
import { UserId } from '../../domain/user/attributes/UserId'
import { UserRepository } from '../../domain/user/UserRepository'
import { Nullable } from '../../../context/shared/domain/Nullable'
import { TypeOrmRepository } from '../../../context/shared/infrastructure/persistence/typeOrm/mysql/Repository'
import { UserEntity } from './typeOrm/UserEntity'
import RequestCriteria from '../../shared/domain/types/CriterialRequest'

export class TypeOrmUserRepository
	extends TypeOrmRepository<User>
	implements UserRepository
{
	public async retrieve(
		criteria: RequestCriteria,
	): Promise<[Array<User>, number]> {
		const repository = await this.repository()
		const columnName = criteria.sortedBy.columnName
		const offset = (criteria.page - 1) * criteria.limit
		const limit = criteria.limit
		const ordering = criteria.sortedBy.ordering
		return await repository.findAndCount({
			order: { [columnName]: ordering },
			skip: offset,
			take: limit,
		})
	}

	public async save(user: User): Promise<void> {
		return await this.persist(user)
	}

	public async deleteUser(userId: UserId): Promise<void> {
		const repository = await this.repository()
		await repository.softDelete({ id: { value: userId.toString() } })
	}

	public async seach(userId: UserId): Promise<Nullable<User>> {
		const repository = await this.repository()
		const user = await repository.findOneBy({
			id: { value: userId.toString() },
		})
		return user
	}

	protected entitySchema(): EntitySchema<User> {
		return UserEntity
	}
}
