import { EntryCollection } from "contentful"

import getClient from "../contentful"
import productParser from "./productParser"

import { IProductFields } from "@/types/contentful"
import { IProduct } from "@/types/product"

export default async function getProductSlugsByCategory(
  category: string | string[],
  preview = false,
  reverse = false
): Promise<IProduct[]> {
  if (Array.isArray(category)) category = category[0]

  const entries: EntryCollection<IProductFields> = await getClient(preview).getEntries({
    content_type: "product",
    "fields.category": category,
    order: reverse ? "-sys.createdAt" : "sys.createdAt",
    select: "fields.url",
  })

  return entries.items.map(productParser)
}
