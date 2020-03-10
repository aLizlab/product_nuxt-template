import { SnsType } from '@/define/Sns'
import { ProjectForMemberType } from '@/define/models/Project'

export enum MemberGradeEnum {
  pro = 'Pro',
  senior = 'Senior',
  basic = 'Basic',
}

export enum MemberJobType {
  designer = 'Designer',
  engineer = 'Engineer',
}

export enum MemberSkillEnum {
  design = 'Design',
  direction = 'Direction',
  frontEnd = 'Front End',
}

export enum MemberTypeEnum {
  uiUx = 'UI/UX',
  creative = 'Creative',
}

export type MemberType = {
  id: string
  name: string
  nameJp: string
  imageUrl: string
  grade: MemberGradeEnum
  type: MemberTypeEnum
  createdAt: number
  deletedAt?: number
}

export type MemberSimpleType = {
  id: string
  name: string
  imageUrl: string
  grade: MemberGradeEnum
  type: MemberTypeEnum
  createdAt: number
  deletedAt?: number
}

export type MemberDetailType = MemberType & {
  // id: string
  // name: string
  // nameJp: string
  // imageUrl: string
  // grade: MemberGradeEnum
  // type: MemberTypeEnum
  // createdAt: number
  // deletedAt?: number
  jobType: MemberJobType
  intro: string
  skills: MemberSkillEnum[]
  sns: SnsType[]
  portfolio?: string
  projects?: ProjectForMemberType[]
}

export type MemberForProjectType = {
  member: MemberDetailType
  hide?: boolean | null
}
