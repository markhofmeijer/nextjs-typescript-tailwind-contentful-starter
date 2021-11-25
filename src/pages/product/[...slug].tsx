import React from "react"
import { ParsedUrlQuery } from "querystring"
import { GetStaticProps, GetStaticPaths } from "next"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import vercelLogo from "../../../public/vercel.svg"

import { PreviewBanner } from "@/components/modules/Banner"
import { Markdown } from "@/components/elements/Markdown"
import getPageBySlug from "@/utils/contentful/page/getPageBySlug"
import getSiteNavigationItems from "@/utils/contentful/siteNavigation/getSiteNavigationItems"
import getSiteMetadata from "@/utils/contentful/siteMetadata/getSiteMetadata"
import getProductSlugs from "@/utils/contentful/product/getProductSlugs"
import getProductBySlug from "@/utils/contentful/product/getProductBySlug"

import { IAppData, IAppDataProps } from "@/types/app"
import { ISEO } from "@/types/seo"

const Home: React.FC<IAppDataProps> = ({ data }) => {
  if (!data || !data.products) return null

  const product = data.products[0]
  const pageTitle = data.page.seo.title ?? data.metaData?.seo.title

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      {data.preview ? <PreviewBanner /> : null}
      <main className="my-12 mx-auto w-1/2">
        <Link href="/products">
          <a className="text-blue-500 underline">Back</a>
        </Link>

        <h1 className="text-3xl font-bold uppercase my-4">Next.js Starter</h1>
        <h2 className="text-2xl font-bold">{product.name}</h2>
        {product.mainImage && product.mainImage.url ? (
          <div className="relative h-72 mb-4">
            <Image
              src={product.mainImage.url}
              alt={product.mainImage.description ?? product.mainImage.title}
              layout="fill"
              objectFit="cover"
              quality="80"
              className="rounded-2xl"
            />
          </div>
        ) : null}
        <div className="mb-8">
          <Markdown src={product.description} />
        </div>
        <div className="mb-4 flex">
          {product.atmosphericImages?.map(
            image =>
              image.url && (
                <div key={image.id} className="mr-4 p-8 border border-gray-700 rounded-lg">
                  <div className="relative h-64 w-64">
                    <Image
                      src={image.url}
                      alt={image.description ?? image.title}
                      layout="fill"
                      objectFit="contain"
                      quality="80"
                    />
                  </div>
                </div>
              )
          )}
        </div>
      </main>

      <footer className="my-4 mx-auto w-1/2">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <Image src={vercelLogo} alt="Vercel Logo" />
        </a>
      </footer>
    </div>
  )
}

interface IParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async ({ preview = false, params }) => {
  const { slug } = params as IParams
  const page = await getPageBySlug("products", preview)
  const navItems = await getSiteNavigationItems(preview)
  const metaData = await getSiteMetadata(preview)
  const product = await getProductBySlug(slug, preview)

  const seo: ISEO = {
    title: product.seo.title ?? page.seo.title,
    description: product.seo.description ?? page.seo.description,
    url: product.seo.url ?? page.seo.url,
    image: product.seo.image ?? page.seo.image,
    keywords: product.seo.keywords
      ? page.seo.keywords?.concat(product.seo.keywords)
      : page.seo.keywords,
  }

  const data: IAppData = {
    preview,
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
  const productSlugs = await getProductSlugs()
  const paths = productSlugs.map(({ slug }) => `/product/${slug}`) ?? []

  return {
    paths,
    fallback: false,
  }
}

export default Home
