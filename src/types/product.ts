import { IMediaImage } from "./media"
import { ISEO } from "./seo"

export interface IProduct {
  id: string
  name: string
  slug: string
  category: "tafels" | "buitenmeubels" | "projecten"
  homepage: boolean
  deliveryDate: string
  description?: string | null
  mainImage: IMediaImage | null
  atmosphericImages?: IMediaImage[] | null
  seo: ISEO
}
