import { StringValueObject } from '../../../shared/domain/value-object/StringValueObject'
import { UserEmailLengthExceeded } from './UserEmailLengthExceeded'

export class UserName extends StringValueObject {
	constructor(value: string) {
		super(value)
		this.ensureLengthIsLessThan30Characters(value)
	}

	private ensureLengthIsLessThan30Characters(value: string): void {
		if (value.length > 30) {
			throw new UserEmailLengthExceeded(
				`The User Name <${value}> has more than 30 characters`,
			)
		}
	}
}
