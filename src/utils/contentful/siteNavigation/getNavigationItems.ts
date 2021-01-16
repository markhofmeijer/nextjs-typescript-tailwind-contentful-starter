import { EntryCollection } from "contentful"

import getClient from "../contentful"
import navigationItemParser from "./navigationItemParser"
import { ISiteNavigationFields } from "@/types/contentful"
import { INavigationItem } from "@/types/navigation"

export default async function getNavigationItems(
  levels = 2,
  code = "root"
): Promise<INavigationItem[]> {
  if (levels < 2)
    throw new Error(
      "NavigationItems - Specified level cannot be less than 2 due to required linked page objects"
    )

  const entries: EntryCollection<ISiteNavigationFields> = await getClient().getEntries({
    content_type: "siteNavigation",
    include: levels,
    "fields.code": code,
  })

  const root = entries.items.map(navigationItemParser)

  return root[0].subItems
}
