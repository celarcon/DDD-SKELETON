import { EntitySchema } from 'typeorm'
import { Role } from '../../../domain/role/Role'
import { RoleId } from '../../../domain/role/attributes/RoleId'
import { RoleName } from '../../../domain/role/attributes/RoleName'
import { ValueObjectTransformer } from '../../../../context/shared/infrastructure/persistence/typeOrm/ValueObjectTransformer'

export const RoleEntity = new EntitySchema<Role>({
	name: 'Role',
	tableName: 'role',
	target: Role,
	columns: {
		id: {
			type: String,
			primary: true,
			transformer: ValueObjectTransformer(RoleId),
		},
		name: {
			type: String,
			transformer: ValueObjectTransformer(RoleName),
		},
		created_at: {
			type: Date,
			createDate: true,
		},
		updated_at: {
			type: Date,
			updateDate: true,
		},
		deleted_at: {
			type: Date,
			deleteDate: true,
		},
	},
})
