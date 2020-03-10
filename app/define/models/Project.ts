import { MemberForProjectType } from '@/define/models/Member'

export enum ProjectCategoryEnum {
  webSite = 'WEB SITE',
  lp = 'LP',
}

export type ProjectType = {
  id: string
  name: string
  imageUrl: string
  category: ProjectCategoryEnum
  date: {
    start: number
    end: number
  }
  createdAt: number
  deletedAt?: number
}

export type ProjectSimpleType = {
  id: string
  name: string
  imageUrl: string
  category: ProjectCategoryEnum
  date: {
    start: number
    end?: number
  }
  createdAt: number
  deletedAt?: number
}

export type ProjectDetailType = ProjectType & {
  // id: string
  // name: string
  // imageUrl: string
  // category: ProjectCategoryEnum
  // date: {
  //   start: number
  //   end: number
  // }
  // createdAt: number
  // deletedAt?: number
  subName?: string
  siteUrl?: string
  intro: string
  samples: string[][]
  members?: MemberForProjectType[]
}

export type ProjectForMemberType = {
  project: ProjectDetailType
  hide?: boolean | null
}
