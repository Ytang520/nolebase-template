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

// const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const creators: Creator[] = [
  {
    name: 'Frank',
    avatar: 'Yuki_jpg.jpg',
    username: 'Frank',
    title: '普通人',
    desc: '喜欢人类微妙的情感，喜欢知识的脉络，目前经历着疼痛，无法呼吸',
    links: [
      // {type: 'github', icon: 'github', link: 'https://github.com/Ytang520' },
    ],
    nameAliases: ['Frank'],
    emailAliases: ['1253522515@qq.com'],
  },
]
// .map<Creator>((c) => {
//   c.avatar = c.avatar || getAvatarUrl(c.username)
//   return c as Creator
// })

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
