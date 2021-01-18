import { Entry } from "contentful"

import mediaParser from "../media/mediaParser"
import seoParser from "../seo/seoParser"
import { IPageFields } from "@/types/contentful"
import { IPage } from "@/types/page"
import { IMediaImage } from "@/types/media"

export default function pageParser({ sys, fields }: Entry<IPageFields>): IPage {
  return {
    id: sys.id,
    slug: fields.url === "home" ? "/" : fields.url,
    title: fields.title,
    image: fields.image ? (mediaParser(fields.image) as IMediaImage) : null,
    description: fields.description ?? null,
    seo: seoParser(fields),
  }
}
