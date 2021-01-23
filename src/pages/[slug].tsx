import React from "react"
import { GetStaticProps, GetStaticPaths } from "next"

import { Layout } from "@/components/layouts"
import { ContentPage } from "@/components/templates"
import getPageSlugs from "@/utils/contentful/page/getPageSlugs"
import getPageBySlug from "@/utils/contentful/page/getPageBySlug"
import getSiteNavigationItems from "@/utils/contentful/siteNavigation/getSiteNavigationItems"
import getSiteMetadata from "@/utils/contentful/siteMetadata/getSiteMetadata"

import { IAppData, IAppDataProps } from "@/types/app"

const DynamicPage: React.FC<IAppDataProps> = ({ data }) => (
  <Layout data={data}>
    <ContentPage data={data} />
  </Layout>
)

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = await getPageBySlug(params.slug)
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

export const getStaticPaths: GetStaticPaths = async () => {
  const pageSlugs = await getPageSlugs()
  const paths =
    pageSlugs
      .filter(({ slug }) => !["/", "contact"].includes(slug))
      .map(({ slug }) => `/${slug}`) ?? []

  return {
    paths,
    fallback: false,
  }
}

export default DynamicPage
