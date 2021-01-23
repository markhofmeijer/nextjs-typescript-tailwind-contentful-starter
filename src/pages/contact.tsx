import React from "react"
import { GetStaticProps } from "next"
// import Image from "next/image"
// import Link from "next/link"
// import Head from "next/head"

import { Layout } from "@/components/layouts"
import { ContentPage } from "@/components/templates"
import getPageBySlug from "@/utils/contentful/page/getPageBySlug"
import getSiteNavigationItems from "@/utils/contentful/siteNavigation/getSiteNavigationItems"
import getSiteMetadata from "@/utils/contentful/siteMetadata/getSiteMetadata"

import { IAppData, IAppDataProps } from "@/types/app"

const ContactPage: React.FC<IAppDataProps> = ({ data }) => {
  return (
    <Layout data={data}>
      <ContentPage data={data} />
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
