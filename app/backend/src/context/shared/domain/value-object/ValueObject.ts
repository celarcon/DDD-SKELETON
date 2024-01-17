import { InvalidArgumentError } from './InvalidArgumentError'

type Primitives = string | number | boolean | Date

export abstract class ValueObject<T extends Primitives> {
	readonly value: T

	constructor(value: T) {
		this.value = value
		this.ensureValueEsDefined(value)
	}

	private ensureValueEsDefined(value: T): void {
		if (value === null || value === undefined) {
			throw new InvalidArgumentError('value must be defined')
		}
	}

	equals(other: ValueObject<T>): boolean {
		return (
			other.constructor.name === this.constructor.name &&
			other.value === this.value
		)
	}

	toString(): string {
		return this.value.toString()
	}
}
