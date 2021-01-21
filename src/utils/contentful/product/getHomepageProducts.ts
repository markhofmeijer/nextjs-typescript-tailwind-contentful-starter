import { EntryCollection } from "contentful"

import getClient from "../contentful"
import productParser from "./productParser"
import { IProductFields } from "@/types/contentful"
import { IProduct } from "@/types/product"

export default async function getHomepageProducts(): Promise<IProduct[]> {
  const entries: EntryCollection<IProductFields> = await getClient().getEntries({
    content_type: "product",
    "fields.homepage": true,
    order: "-fields.deliveryDate",
  })

  return entries.items.map(productParser)
}
