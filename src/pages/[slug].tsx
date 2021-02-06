import React from "react"
import { GetStaticProps, GetStaticPaths } from "next"

import { Layout } from "@/components/layouts"
import { Product } from "@/components/elements/Product"
import { ContentPage } from "@/components/templates"
import getPageSlugs from "@/utils/contentful/page/getPageSlugs"
import getPageBySlug from "@/utils/contentful/page/getPageBySlug"
import getSiteNavigationItems from "@/utils/contentful/siteNavigation/getSiteNavigationItems"
import getSiteMetadata from "@/utils/contentful/siteMetadata/getSiteMetadata"
import getProductsByCategory from "@/utils/contentful/product/getProductsByCategory"

import { IAppData, IAppDataProps } from "@/types/app"

const DynamicPage: React.FC<IAppDataProps> = ({ data }) => (
  <Layout data={data}>
    <ContentPage data={data} />
    {data.products && data.products.length > 0 ? (
      <div className="container pt-8 pb-16 grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
        {data.products.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    ) : null}
  </Layout>
)

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = await getPageBySlug(params.slug)
  const navItems = await getSiteNavigationItems()
  const metaData = await getSiteMetadata()
  const products = await getProductsByCategory(params.slug, true)

  const data: IAppData = {
    page,
    navItems,
    metaData,
    products,
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
