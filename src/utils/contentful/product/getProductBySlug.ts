import { EntryCollection } from "contentful"

import getClient from "../contentful"
import productParser from "./productParser"

import { IProductFields } from "@/types/contentful"
import { IProduct } from "@/types/product"

export default async function getProductBySlug(
  slug: string | string[],
  preview = false
): Promise<IProduct> {
  if (Array.isArray(slug)) slug = slug[0]

  const entries: EntryCollection<IProductFields> = await getClient(preview).getEntries({
    content_type: "product",
    "fields.slug": slug,
  })

  if (entries.items.length === 0) return null

  return productParser(entries.items[0])
}
