import { EntryCollection } from "contentful"

import getClient from "../contentful"
import pageParser from "./pageParser"

import { IPageFields } from "@/types/contentful"
import { IPage } from "@/types/page"

export default async function getPageBySlug(slug: string | string[]): Promise<IPage> {
  if (Array.isArray(slug)) slug = slug[0]

  const entries: EntryCollection<IPageFields> = await getClient().getEntries({
    content_type: "page",
    "fields.url": slug === "/" ? "home" : slug,
  })

  if (entries.items.length === 0) return null

  const pages: IPage[] = entries.items.map(pageParser)

  return pages[0]
}
