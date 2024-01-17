export const Context = {
	TEST: {
		env: 'test',
		host: process.env.POSTGRES_DB_HOST_TEST,
		port: Number(process.env.POSTGRES_PORT_TEST!),
		username: process.env.POSTGRES_USER_TEST,
		password: process.env.POSTGRES_PASSWORD_TEST,
		database: process.env.POSTGRES_DATABASE_TEST,
	},
	DEV: {
		env: 'dev',
		host: process.env.POSTGRES_DB_HOST,
		port: Number(process.env.POSTGRES_PORT!),
		username: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASSWORD,
		database: process.env.POSTGRES_DATABASE,
	},
}
