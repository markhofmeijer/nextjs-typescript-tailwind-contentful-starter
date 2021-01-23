import { EntryCollection } from "contentful"

import getClient from "../contentful"
import metadataParser from "./metadataParser"

import { ISiteMetadataFields } from "@/types/contentful"
import { IMetadata } from "@/types/metadata"

export default async function getSiteMetadata(): Promise<IMetadata> {
  const entries: EntryCollection<ISiteMetadataFields> = await getClient().getEntries({
    content_type: "siteMetadata",
  })

  const metaData = entries.items.map(metadataParser)

  return metaData[0]
}
