import React from "react"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

interface PropTypes {
  children: React.ReactNode
}

const Layout: React.FC<PropTypes> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
)

export { Layout }
