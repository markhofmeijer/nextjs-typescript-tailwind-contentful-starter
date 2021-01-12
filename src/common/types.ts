// Navigation
export interface INavigationItems {
  level?: number
  parentId?: string
  items: Array<INavigationItem>
}

export interface INavigationItem {
  id: string
  level: number
  name: string
  link: string
  subItems?: Array<INavigationItem>
}

// SEO
export interface ISEOProps {
  title?: string
  description?: string
  url?: string
  author?: string
  image?: string
  keywords?: string[]
  meta?: IMetaItem[]
}

interface IMetaItem {
  name: string
  content: string
}
