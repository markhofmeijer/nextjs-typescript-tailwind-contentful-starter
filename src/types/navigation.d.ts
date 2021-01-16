export type NavigationItem = {
  id: string
  name: string
  code: string | null
  slug: string
  subItems: NavigationItem[]
}

type NavProps = {
  level?: number
}

export type NavItemsProps = NavProps & {
  items: NavigationItem[]
}

export type NavItemProps = NavProps & {
  item: NavigationItem
}
