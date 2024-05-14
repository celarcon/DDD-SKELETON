import { AggregateRoot } from '../../shared/domain/AggregateRoot'
import { UserId } from './attributes/UserId'
import { UserName } from './attributes/UserName'
import { UserEmail } from './attributes/UserEmail'

export class User extends AggregateRoot {
	readonly id: UserId
	readonly name: UserName
	readonly email: UserEmail
	readonly created_at: Date
	readonly updated_at: Date
	readonly deleted_at: Date

	constructor(id: UserId, name: UserName, email: UserEmail) {
		super()
		this.id = id
		this.name = name
		this.email = email
	}

	static fromPrimitives(plainData: {
		id: string
		name: string
		email: string
		role_id: string
	}): User {
		return new User(
			new UserId(plainData.id),
			new UserName(plainData.name),
			new UserEmail(plainData.email),
		)
	}

	toPrimitives(): any {
		return {
			id: this.id.value,
			name: this.name.value,
			email: this.email.value,
		}
	}
}
