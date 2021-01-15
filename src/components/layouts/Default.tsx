import React from "react"

import { Header } from "@/components/modules/Header"
import { Footer } from "@/components/modules/Footer"

interface PropTypes {
  children: React.ReactNode
}

const DefaultLayout: React.FC<PropTypes> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
)

export { DefaultLayout }
