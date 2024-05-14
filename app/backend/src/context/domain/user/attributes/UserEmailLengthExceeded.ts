export class UserEmailLengthExceeded extends Error {
	constructor(value: string) {
		super(value)
	}
}
