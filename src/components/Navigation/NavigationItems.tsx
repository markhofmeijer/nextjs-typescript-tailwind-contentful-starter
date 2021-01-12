import React from "react"

import { INavigationItems } from "@/common/types"
import { NavigationItem } from "./NavigationItem"

const NavigationItems: React.FC<INavigationItems> = props => {
  const currentLevel = props.level ? props.level + 1 : 1

  return (
    <div className="flex flex-col md:flex-row md:justify-center md:mx-auto md:my-4">
      {props.items.map((item, index) => {
        const currentId = props.parentId ? `${props.parentId}-${index}` : `${currentLevel}-${index}`
        return (
          <NavigationItem
            key={currentId}
            id={currentId}
            level={currentLevel}
            name={item.name}
            link={item.link}
            subItems={item.subItems}
          />
        )
      })}
    </div>
  )
}

export { NavigationItems }
