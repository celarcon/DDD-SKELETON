import { DataSource, EntityMetadata } from 'typeorm'
import { EnviromentArranger } from '../../arranger/EnviromentArranger'

export class TypeOrmEnviromentArranger extends EnviromentArranger {
	constructor(private _client: Promise<DataSource>) {
		super()
	}

	public async arrange(): Promise<void> {
		await this.cleanDatabase()
	}

	protected async cleanDatabase(): Promise<void> {
		const entities = await this.entities()

		try {
			for (const entity of entities) {
				const repository = (await this._client).getRepository(entity.name)
				await repository.query(`TRUNCATE TABLE ${entity.tableName}`)
			}
		} catch (error) {
			throw new Error(`Unable to clear test database ${error}`)
		}
	}

	private async entities(): Promise<EntityMetadata[]> {
		return (await this._client).entityMetadatas
	}

	protected client(): Promise<DataSource> {
		return this._client
	}

	public async close(): Promise<void> {
		return (await this.client()).destroy()
	}
}
