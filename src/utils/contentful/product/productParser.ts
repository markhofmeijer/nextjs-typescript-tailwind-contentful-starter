import { Entry } from "contentful"

import mediaParser from "../media/mediaParser"
// import seoParser from "../seo/seoParser"

import { IProductFields } from "@/types/contentful"
import { IProduct } from "@/types/product"
import { IMediaImage } from "@/types/media"

export default function productParser({ sys, fields }: Entry<IProductFields>): IProduct {
  const atmosphericImages: IMediaImage[] = fields.atmosphericImages?.map(
    img => mediaParser(img) as IMediaImage
  )

  return {
    id: sys.id,
    name: fields.name,
    slug: fields.url,
    category: fields.category,
    homepage: fields.homepage,
    deliveryDate: fields.deliveryDate,
    description: fields.description ?? null,
    mainImage: mediaParser(fields.mainImage) as IMediaImage,
    atmosphericImages: atmosphericImages ?? null,
  }
}
