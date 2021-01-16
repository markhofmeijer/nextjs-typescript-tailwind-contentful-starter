import { INavigationItem } from "@/types/navigation"

export interface IPage {
  slug?: string
  title?: string
  navItems?: INavigationItem[]
}
