import { INavigationItem } from "@/types/navigation"
import { IPage } from "@/types/page"

export interface IAppData {
  navItems?: INavigationItem[]
  page?: IPage
}

export interface IAppDataProps {
  data: IAppData
}
