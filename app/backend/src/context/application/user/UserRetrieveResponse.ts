import { SortByCriteria } from '../../shared/domain/types/CriterialRequest'
import { PagerResponse } from '../../shared/domain/types/PagerResponse'

export interface UserRetrieve {
	id: string
	name: string
	email: string
}

export type UserRetrieveResponse = {
	data: Array<UserRetrieve>
	pager: PagerResponse
	sortedBy: SortByCriteria
	error?: string
}
