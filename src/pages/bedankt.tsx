import React from "react"
import { GetStaticProps } from "next"

import { Layout } from "@/components/layouts"
import { ContentPage } from "@/components/templates"
import getPageBySlug from "@/utils/contentful/page/getPageBySlug"
import getSiteNavigationItems from "@/utils/contentful/siteNavigation/getSiteNavigationItems"
import getSiteMetadata from "@/utils/contentful/siteMetadata/getSiteMetadata"

import { IAppData, IAppDataProps } from "@/types/app"

const ContactPage: React.FC<IAppDataProps> = ({ data }) => {
  const { metaData } = data

  return (
    <Layout data={data}>
      <ContentPage data={data} />

      <div className="container pt-4 md:pt-8 pb-8">
        <h2 className="text-xl leading-loose font-bold">Contactgegevens</h2>
        <p className="mbt-4">
          {metaData.clientName}
          <br />
          {metaData.clientAddress}
          <br />
          {`${metaData.clientZipCode} ${metaData.clientCity}`}
          <br />
          {`T: ${metaData.clientPhone}`}
          <br />
          E: <a href={`mailto:${metaData.clientEmail}`}>{metaData.clientEmail}</a>
        </p>
        <h2 className="mt-8 text-xl leading-loose font-bold">Contactformulier</h2>
        <div className="mt-2 md:mb-4 bg-green-100 border border-green-200 p-4 rounded-lg text-gray-800">
          Wij hebben uw bericht goed ontvangen en streven er naar om deze binnen 2 werkdagen te
          beantwoorden.
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const page = await getPageBySlug("contact")
  const navItems = await getSiteNavigationItems()
  const metaData = await getSiteMetadata()

  const data: IAppData = {
    page,
    navItems,
    metaData,
  }

  return {
    props: {
      data,
    },
  }
}

export default ContactPage
