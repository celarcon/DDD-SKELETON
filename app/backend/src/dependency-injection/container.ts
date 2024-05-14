import * as awilix from 'awilix'
import UsersGetController from '../controllers/user/UsersGetController'
import { TypeOrmUserRepository } from '../context/infrastructure/persistence/TypeOrmUserRepository'
import { UserRetrieve } from '../context/application/user/UserRetrieve'

const container = awilix.createContainer()

container.register({
	userRepository: awilix.asClass(TypeOrmUserRepository).singleton(),
	userRetrieve: awilix.asClass(UserRetrieve).singleton(),
	usersGet: awilix.asClass(UsersGetController),
})

export const userGet = container.resolve('usersGet')
