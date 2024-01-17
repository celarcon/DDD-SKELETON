export class InvalidArgumentError extends Error {
	constructor(value: string) {
		super(value)
	}
}
