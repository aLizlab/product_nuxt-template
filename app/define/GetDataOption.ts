export enum GetDataOptionOrderEnum {
  asc = 'asc',
  desc = 'desc',
}

export enum GetDataOptionOrderByEnum {
  createdAt = 'createdAt',
  name = 'name',
}

export type GetDataOptionType = {
  dataName?: string
  pagination?: number
  limit?: number
  order?: GetDataOptionOrderEnum
  orderBy?: GetDataOptionOrderByEnum
  ids?: string[]
  filters?: object
  s?: string
}
