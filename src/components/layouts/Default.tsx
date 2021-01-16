import React from "react"

import { PageMetadata } from "@/types/app"
import { Header } from "@/components/modules/Header"
import { Footer } from "@/components/modules/Footer"

const DefaultLayout: React.FC<PageMetadata> = ({ pageMetadata, children }) => (
  <div className="flex flex-col min-h-screen">
    <Header pageMetadata={pageMetadata} />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
)

export { DefaultLayout }
