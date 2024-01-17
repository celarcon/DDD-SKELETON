export enum OrderingEnum {
	ASCENDANT = 'asc',
	DESCENDANT = 'desc',
}

export interface SortByCriteria {
	columnName: string
	ordering: OrderingEnum
}
export default interface RequestCriteria {
	sortedBy: SortByCriteria
	search: string
	limit: number
	page: number
}
