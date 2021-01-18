import React from "react"

import { INavItemsProps } from "@/types/navigation"
import { NavItem } from "./NavItem"

const NavItems: React.FC<INavItemsProps> = ({ level, items }) => {
  const currentLevel = level ? level + 1 : 1

  return (
    <div className="flex flex-col md:flex-row md:justify-center md:mx-auto md:my-4">
      {items.map(item => (
        <NavItem key={item.id} level={currentLevel} item={item} />
      ))}
    </div>
  )
}

export { NavItems }
