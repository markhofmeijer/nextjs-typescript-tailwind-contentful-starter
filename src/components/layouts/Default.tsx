import React from "react"

import { Head } from "@/components/elements/Head"
import { Header } from "@/components/modules/Header"
import { Footer } from "@/components/modules/Footer"
import { PreviewBanner } from "@/components/modules/Banner"

import { IAppDataProps } from "@/types/app"

const DefaultLayout: React.FC<IAppDataProps> = ({ data, children }) => (
  <>
    <Head data={data} />
    {data.preview ? <PreviewBanner /> : null}
    <div className="flex flex-col min-h-screen">
      <Header data={data} />
      <main className="flex-grow">{children}</main>
      <Footer data={data} />
    </div>
  </>
)

export { DefaultLayout }
