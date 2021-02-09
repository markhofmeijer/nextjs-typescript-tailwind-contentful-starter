import React from "react"
import { GetStaticProps } from "next"
import Link from "next/link"

import { Layout } from "@/components/layouts"
import getSiteNavigationItems from "@/utils/contentful/siteNavigation/getSiteNavigationItems"
import getSiteMetadata from "@/utils/contentful/siteMetadata/getSiteMetadata"

import { IAppData, IAppDataProps } from "@/types/app"

const NotFoundPage: React.FC<IAppDataProps> = ({ data }) => (
  <Layout data={data}>
    <div className="py-8 bg-primary-lighter bg-opacity-75 text-center">
      <div className="container">
        <h1 className="text-3xl font-bold">Pagina niet gevonden</h1>
      </div>
    </div>
    <div className="container pt-8 pb-8">
      <div className="text-center">
        <p>Helaas is de opgevraagde pagina niet beschikbaar.</p>
        <p className="mt-8">
          <Link href="/">
            <a className="text-gray-700 hover:text-gray-900 hover:underline">
              Ga terug naar de startpagina
            </a>
          </Link>
        </p>
      </div>
    </div>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const navItems = await getSiteNavigationItems()
  const metaData = await getSiteMetadata()

  const data: IAppData = {
    navItems,
    metaData,
  }

  return {
    props: {
      data,
    },
  }
}

export default NotFoundPage
