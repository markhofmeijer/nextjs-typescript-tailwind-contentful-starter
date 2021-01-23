import React from "react"

import { Head } from "@/components/elements/Head"
import { Header } from "@/components/modules/Header"
import { Footer } from "@/components/modules/Footer"

import { IAppDataProps } from "@/types/app"

const DefaultLayout: React.FC<IAppDataProps> = ({ data, children }) => (
  <>
    <Head data={data} />
    <div className="flex flex-col min-h-screen">
      <Header data={data} />
      <main className="flex-grow">{children}</main>
      <Footer data={data} />
    </div>
  </>
)

export { DefaultLayout }
