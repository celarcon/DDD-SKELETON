import { DataSource, EntitySchema, Repository } from 'typeorm'
import { AggregateRoot } from '../../../../domain/AggregateRoot'
import RequestCriteria from '../../../../domain/types/CriterialRequest'

export abstract class TypeOrmRepository<T extends AggregateRoot> {
	constructor(private _client: Promise<DataSource>) {}

	protected abstract entitySchema(): EntitySchema<T>

	protected client(): Promise<DataSource> {
		return this._client
	}

	protected async repository(): Promise<Repository<T>> {
		return (await this._client).getRepository(this.entitySchema())
	}

	protected async retrieve(
		criteria: RequestCriteria,
	): Promise<[Array<T>, number]> {
		const repository = await this.repository()
		return await repository.findAndCount()
	}

	protected async delete(aggregateRoot: T): Promise<void> {
		const repository = await this.repository()
		repository.delete(aggregateRoot as any)
	}

	protected async persist(aggregateRoot: T): Promise<void> {
		const repository = await this.repository()
		await repository.save(aggregateRoot as any)
	}
}
