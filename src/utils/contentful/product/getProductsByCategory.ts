import { EntryCollection } from "contentful"

import getClient from "../contentful"
import productParser from "./productParser"

import { IProductFields } from "@/types/contentful"
import { IProduct } from "@/types/product"

export default async function getProductsByCategory(
  category: string | string[],
  reverse = false
): Promise<IProduct[]> {
  if (Array.isArray(category)) category = category[0]

  const entries: EntryCollection<IProductFields> = await getClient().getEntries({
    content_type: "product",
    "fields.category": category,
    order: reverse ? "-fields.deliveryDate" : "fields.deliveryDate",
  })

  return entries.items.map(productParser)
}
