import { EntitySchema } from 'typeorm'
import { User } from '../../../domain/user/User'
import { UserId } from '../../../domain/user/attributes/UserId'
import { UserName } from '../../../domain/user/attributes/UserName'
import { UserEmail } from '../../../domain/user/attributes/UserEmail'
import { ValueObjectTransformer } from '../../../../context/shared/infrastructure/persistence/typeOrm/ValueObjectTransformer'

export const UserEntity = new EntitySchema<User>({
	name: 'User',
	tableName: 'user',
	target: User,
	columns: {
		id: {
			type: String,
			primary: true,
			transformer: ValueObjectTransformer(UserId),
		},
		name: {
			type: String,
			transformer: ValueObjectTransformer(UserName),
		},
		email: {
			type: String,
			transformer: ValueObjectTransformer(UserEmail),
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
