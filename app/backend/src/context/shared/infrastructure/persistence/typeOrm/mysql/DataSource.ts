import { DataSource } from 'typeorm'
import { Context } from '../../../../utils/Context'

const {
	host_mysql,
	port_mysql,
	username_mysql,
	password_mysql,
	database_mysql,
} = Context.DEV

export const datasource = (contextName: string): DataSource => {
	console.log(
		contextName,
		host_mysql,
		port_mysql,
		username_mysql,
		password_mysql,
		database_mysql,
	)
	return new DataSource({
		name: contextName,
		type: 'mysql',
		host: 'mysql-db',
		port: port_mysql,
		username: username_mysql,
		password: password_mysql,
		database: database_mysql,
		logging: false,
		synchronize: true,
		entities: [
			__dirname +
				'/../../../../infrastructure/persistence/typeOrm/mysql/*.{ts,js}',
		],
		migrations: [__dirname + '/migrations/*.{ts,js}'],
		migrationsTableName: 'custom_migration_table',
	})
}

export default datasource('migrations')
