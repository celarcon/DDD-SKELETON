import type { Config } from 'jest'

const config: Config = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	cacheDirectory: 'tmp/jestCache',
}

export default config
