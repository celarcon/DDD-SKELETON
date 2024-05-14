import { DataSource } from 'typeorm'
import { datasource } from './DataSource'
export class ClientFactory {
	static async createClient(contextName: string): Promise<DataSource | void> {
		try {
			const dataSource: DataSource = datasource(contextName)
			return await dataSource.initialize()
		} catch (error) {
			console.log('error', error)
		}
	}
}
