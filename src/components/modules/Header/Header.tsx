import React, { useState } from "react"

import { Logo } from "@/components/elements/Logo"
import { NavItems } from "@/components/modules/Navigation"
import { SocialMediaRibbon } from "@/components/modules/SocialMedia"

import { IAppDataProps } from "@/types/app"

const Header: React.FC<IAppDataProps> = ({ data }) => {
  const [drawerIsVisible, setDrawerIsVisible] = useState(false)
  const drawerToggleHandler = () => setDrawerIsVisible(!drawerIsVisible)

  return (
    <header>
      <div className="container">
        <div className="relative py-4 md:pt-6 md:pb-0">
          <div className="flex justify-center">
            <Logo link="/" />
          </div>
          <div className="hidden md:block absolute top-4 md:top-6 right-0 opacity-70">
            <SocialMediaRibbon data={data} />
          </div>
        </div>
        <nav className="hidden md:block">
          <NavItems items={data.navItems} />
        </nav>

        <div className="relative md:hidden mx-6 mb-6">
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
                <NavItems items={data.navItems} />
              </nav>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  )
}

export { Header }
