import { IMediaImage } from "./media"

export interface ISEO {
  title?: string | null
  description?: string | null
  url?: string | null
  author?: string | null
  image?: IMediaImage | null
  keywords?: string[] | null
}

// export interface ISEOProps {
//   title?: string | undefined
//   description?: string | undefined
//   url?: string | undefined
//   author?: string | undefined
//   image?: string | undefined
//   keywords?: string[] | undefined
//   meta?: IMetaItem[] | undefined
// }

// interface IMetaItem {
//   name: string | undefined
//   content: string | undefined
// }
