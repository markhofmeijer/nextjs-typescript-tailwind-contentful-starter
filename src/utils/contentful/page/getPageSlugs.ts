import { EntryCollection } from "contentful"

import getClient from "../contentful"
import pageParser from "./pageParser"

import { IPageFields } from "@/types/contentful"
import { IPage } from "@/types/page"

export default async function getPageSlugs(): Promise<IPage[]> {
  const entries: EntryCollection<IPageFields> = await getClient().getEntries({
    content_type: "page",
    select: "fields.url",
  })

  return entries.items.map(pageParser)
}
