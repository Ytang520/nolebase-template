export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://raw.githubusercontent.com/Ytang520/Paper-notes/blob/main/Yuki.png`
// 

export const creators: Creator[] = [
  {
    name: 'Frank',
    avatar: '',
    username: 'Frank',
    title: '普通人',
    desc: '正在学习人类的复杂情感，思考知识的脉络，试图张开生命和帮助别人张开生命。很遗憾，基本都失败了...',
    links: [
      {type: 'github', icon: 'github', link: 'https://github.com/Ytang520' },
    ],
    nameAliases: ['Frank'],
    emailAliases: ['htang2023126578@gmail.com'],
  },
]
.map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
