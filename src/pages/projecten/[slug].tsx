import React from "react"
import { GetStaticProps, GetStaticPaths } from "next"

import { Layout } from "@/components/layouts"
import { ProductPage } from "@/components/templates"
import getProductSlugsByCategory from "@/utils/contentful/product/getProductSlugsByCategory"
import getPageBySlug from "@/utils/contentful/page/getPageBySlug"
import getSiteNavigationItems from "@/utils/contentful/siteNavigation/getSiteNavigationItems"
import getSiteMetadata from "@/utils/contentful/siteMetadata/getSiteMetadata"
import getProductBySlug from "@/utils/contentful/product/getProductBySlug"

import { IAppData, IAppDataProps } from "@/types/app"
import { ISEO } from "@/types/seo"

const DynamicProductPage: React.FC<IAppDataProps> = ({ data }) => (
  <Layout data={data}>
    <ProductPage data={data} />
  </Layout>
)

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = "projecten"

  const page = await getPageBySlug(category)
  const navItems = await getSiteNavigationItems()
  const metaData = await getSiteMetadata()
  const product = await getProductBySlug(params.slug)

  const seo: ISEO = {
    title: product.seo.title ?? page.seo.title,
    description: product.seo.description ?? page.seo.description,
    url: product.seo.url ?? page.seo.url,
    image: product.seo.image ?? page.seo.image,
    keywords: page.seo.keywords?.concat(product.seo.keywords),
  }

  const data: IAppData = {
    page: {
      ...page,
      seo,
    },
    navItems,
    metaData,
    products: [product],
  }

  return {
    props: {
      data,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const category = "projecten"

  const productSlugs = await getProductSlugsByCategory(category)
  const paths = productSlugs.map(({ slug }) => `/${category}/${slug}`) ?? []

  return {
    paths,
    fallback: false,
  }
}

export default DynamicProductPage
