export const Context = {
	DEV: {
		env: 'dev',

		host_mysql: process.env.MYSQL_HOST,
		port_mysql: Number(process.env.MYSQL_PORT!),
		username_mysql: process.env.MYSQL_DATABASE,
		password_mysql: process.env.MYSQL_PASSWORD,
		database_mysql: process.env.MYSQL_ROOT_PASSWORD,

		host_mongo: process.env.MONGO_HOST,
		port_mongo: Number(process.env.MONGO_PORT!),
		username_mongo: process.env.MONGO_USER,
		password_mongo: process.env.MONGO_PASSWORD,
		database_mongo: process.env.MONGO_ROOT_PASSWORD,
	},
}
