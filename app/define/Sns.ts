export enum SnsTypeEnum {
  twitter = 'twitter',
  facebook = 'facebook',
  instagram = 'instagram',
  youtube = 'youtube',
}

export type SnsType = {
  snsType: SnsTypeEnum
  link: string
}
