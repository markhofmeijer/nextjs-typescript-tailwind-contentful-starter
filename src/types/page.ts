import { IMediaImage } from "./media"

export interface IPage {
  id: string
  slug: string
  title: string
  image?: IMediaImage | null
  description?: string
}
