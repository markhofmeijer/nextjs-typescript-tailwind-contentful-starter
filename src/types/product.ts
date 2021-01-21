import { IMediaImage } from "./media"

export interface IProduct {
  id: string
  name: string
  slug: string
  category: "Tafels" | "Buitenmeubels" | "Projecten"
  homepage: boolean
  deliveryDate: string
  description?: string | null
  mainImage: IMediaImage | null
  atmosphericImages?: IMediaImage[] | null
}
