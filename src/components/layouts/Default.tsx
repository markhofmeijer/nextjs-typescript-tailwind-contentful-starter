import React from "react"

import { IAppDataProps } from "@/types/app"
import { Header } from "@/components/modules/Header"
import { Footer } from "@/components/modules/Footer"

const DefaultLayout: React.FC<IAppDataProps> = ({ data, children }) => (
  <div className="flex flex-col min-h-screen">
    <Header data={data} />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
)

export { DefaultLayout }
