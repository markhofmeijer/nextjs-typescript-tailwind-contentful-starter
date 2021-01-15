export interface INavigationItems {
  level?: number | undefined
  parentId?: string | undefined
  items: Array<INavigationItem>
}

export interface INavigationItem {
  id: string
  level: number
  name: string
  link: string
  subItems?: Array<INavigationItem> | undefined
}
