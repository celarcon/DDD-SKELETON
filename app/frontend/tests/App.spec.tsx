import i18n from '../src/i18n/i18n'

describe('testSuite', () => {
	beforeEach(() => {
		i18n.init()
	})

	test('Test', () => {
		expect(true).toBeTruthy()
	})
})
