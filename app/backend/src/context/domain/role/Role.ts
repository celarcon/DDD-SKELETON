import { AggregateRoot } from '../../shared/domain/AggregateRoot'
import { RoleId } from './attributes/RoleId'
import { RoleName } from './attributes/RoleName'

export class Role extends AggregateRoot {
	readonly id: RoleId
	readonly name: RoleName
	readonly created_at: Date
	readonly updated_at: Date
	readonly deleted_at: Date

	constructor(id: RoleId, name: RoleName) {
		super()
		this.id = id
		this.name = name
	}

	static fromPrimitives(plainData: {
		id: string
		name: string
		text: string
	}): Role {
		return new Role(new RoleId(plainData.id), new RoleName(plainData.name))
	}

	toPrimitives(): any {
		return {
			id: this.id.value,
			name: this.name.value,
		}
	}
}
