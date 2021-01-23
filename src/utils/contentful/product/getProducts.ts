import { EntryCollection } from "contentful"

import getClient from "../contentful"
import productParser from "./productParser"

import { IProductFields } from "@/types/contentful"
import { IProduct } from "@/types/product"

export default async function getProducts(reverse = false): Promise<IProduct[]> {
  const entries: EntryCollection<IProductFields> = await getClient().getEntries({
    content_type: "product",
    order: reverse ? "-sys.createdAt" : "sys.createdAt",
  })

  return entries.items.map(productParser)
}
