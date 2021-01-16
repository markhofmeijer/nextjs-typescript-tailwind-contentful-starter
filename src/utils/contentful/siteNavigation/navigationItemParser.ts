import { Entry } from "contentful"

import { ISiteNavigationFields } from "@/types/contentful"
import { NavigationItem } from "@/types/navigation"

export default function navigationItemParser({
  sys,
  fields,
}: Entry<ISiteNavigationFields>): NavigationItem {
  if (!fields) return

  const slug = fields.page && fields.page.sys.type !== "Link" ? fields.page.fields.url : null

  const subItems = fields.subNavItems
    ?.filter(item => item.sys.type !== "Link")
    .map(navigationItemParser)

  return {
    id: sys.id,
    name: fields.name,
    code: fields.code ?? null,
    slug,
    subItems: subItems ?? [],
  }
}
