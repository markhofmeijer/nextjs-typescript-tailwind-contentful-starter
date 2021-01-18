import React from "react"
import Link from "next/link"

import { INavItemProps } from "@/types/navigation"

const NavItem: React.FC<INavItemProps> = ({ level, item }) => {
  const linkContainerClasses =
    level === 1
      ? [
          "group",
          "mb-3 md:mb-0",
          "py-2 md:py-0",
          "rounded-t-sm border-b border-primary-lighter hover:border-primary hover:bg-primary-lighter md:border-b-2 md:border-transparent md:hover:border-gray-900 md:hover:bg-transparent",
        ]
      : []

  const linkClasses = [
    "block",
    "md:uppercase tracking-wide font-medium",
    "md:text-gray-700 md:hover:text-gray-900",
  ]
  if (level === 1) {
    linkClasses.push("px-4 md:pt-3 md:py-2")
  }

  return (
    <div className={linkContainerClasses.join(" ")}>
      <Link href={`/${item.slug}`}>
        <a className={linkClasses.join(" ")}>{item.name}</a>
      </Link>
    </div>
  )
}

export { NavItem }
