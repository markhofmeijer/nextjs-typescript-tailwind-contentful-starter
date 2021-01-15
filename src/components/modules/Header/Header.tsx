import React, { useState } from "react"
// import React from "react"

import { Logo } from "@/components/elements/Logo"
import { NavigationItems } from "@/components/modules/Navigation"

const Header: React.FC = () => {
  const [drawerIsVisible, setDrawerIsVisible] = useState(false)
  const drawerToggleHandler = () => setDrawerIsVisible(!drawerIsVisible)

  //   const { site } = useStaticQuery(graphql`
  //   	query {
  //   		site {
  //   			siteMetadata {
  //   				navigationItems {
  //   					name
  //   					link
  //   				}
  //   			}
  //   		}
  //   	}
  //   `)

  const navItems: any = [
    {
      name: "Over ons",
      link: "/over-ons",
    },
    {
      name: "Tafels",
      link: "/tafels",
    },
    {
      name: "Buitenmeubels",
      link: "/buitenmeubels",
    },
    {
      name: "Projecten",
      link: "/projecten",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ]

  return (
    <header>
      <div className="container">
        <div className="py-4 md:pt-6 md:pb-0">
          <Logo link="/" />
        </div>
        <nav className="hidden md:block">
          <NavigationItems items={navItems} />
        </nav>

        <div className="relative md:hidden mx-6 mb-3">
          <button
            type="button"
            className="group w-full inline-flex justify-between py-1 px-2 bg-gray-100 hover:bg-gray-300 border border-gray-300 rounded text-sm tracking-wide"
            onClick={drawerToggleHandler}
          >
            Selecteer een pagina
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6 text-gray-400 group-hover:text-gray-500"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          {drawerIsVisible ? (
            <div className="absolute left-0 right-0 z-50 pt-3">
              <nav className="bg-gray-100 bg-opacity-90 border-t-4 border-primary p-3 text-black">
                <NavigationItems items={navItems} />
              </nav>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  )
}

export { Header }
