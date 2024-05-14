import RequestCriteria from '../../shared/domain/types/CriterialRequest'
import { Role } from './Role'
import { RoleId } from './attributes/RoleId'

export interface RoleRepository {
	save(role: Role): Promise<void>
	retrieve(criteria: RequestCriteria): Promise<[Array<Role>, number]>
	deleteRole(id: RoleId): Promise<void>
}
