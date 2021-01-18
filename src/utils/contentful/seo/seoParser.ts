import mediaParser from "../media/mediaParser"
import { ISiteMetadataFields, IPageFields } from "@/types/contentful"
import { IMediaImage } from "@/types/media"
import { ISEO } from "@/types/seo"

export default function seoParser(fields: ISiteMetadataFields | IPageFields): ISEO {
  const image = fields.seo_image ? (mediaParser(fields.seo_image) as IMediaImage) : null

  return {
    title: fields.seo_title ?? null,
    description: fields.seo_description ?? null,
    url: fields.seo_url ?? null,
    image,
    keywords: fields.seo_keywords ?? [],
  }
}
