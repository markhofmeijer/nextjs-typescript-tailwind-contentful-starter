import { EntryCollection } from "contentful"

import getClient from "../contentful"
import pageParser from "./pageParser"
import { IPageFields } from "@/types/contentful"
import { IPage } from "@/types/page"

export default async function getPages(): Promise<IPage[]> {
  const entries: EntryCollection<IPageFields> = await getClient().getEntries({
    content_type: "page",
  })

  return entries.items.map(pageParser)
}
