import { INavigationItem } from "@/types/navigation"
import { IPage } from "@/types/page"
import { IMetadata } from "@/types/metadata"

export interface IAppData {
  navItems?: INavigationItem[]
  page?: IPage
  metaData?: IMetadata
}

export interface IAppDataProps {
  data: IAppData
}
