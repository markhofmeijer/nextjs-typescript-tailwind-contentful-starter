import React from "react"

import { IAppData } from "@/types/app"
import { Header } from "@/components/modules/Header"
import { Footer } from "@/components/modules/Footer"

const DefaultLayout: React.FC<IAppData> = ({ data, children }) => (
  <div className="flex flex-col min-h-screen">
    <Header data={data} />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
)

export { DefaultLayout }
