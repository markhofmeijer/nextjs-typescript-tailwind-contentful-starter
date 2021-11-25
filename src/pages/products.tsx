import React from "react"
import { GetStaticProps } from "next"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import vercelLogo from "../../public/vercel.svg"

import { PreviewBanner } from "@/components/modules/Banner"
import getPageBySlug from "@/utils/contentful/page/getPageBySlug"
import getSiteNavigationItems from "@/utils/contentful/siteNavigation/getSiteNavigationItems"
import getSiteMetadata from "@/utils/contentful/siteMetadata/getSiteMetadata"
import getProducts from "@/utils/contentful/product/getProducts"

import { IAppData, IAppDataProps } from "@/types/app"

const Home: React.FC<IAppDataProps> = ({ data }) => {
  const pageTitle = data.page.seo.title ?? data.metaData?.seo.title

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      {data.preview ? <PreviewBanner /> : null}
      <main className="my-12 mx-auto w-1/2">
        <Link href="/">
          <a className="text-blue-500 underline">Back</a>
        </Link>

        <h1 className="text-3xl font-bold uppercase my-4">Next.js Starter</h1>
        <h2 className="text-2xl font-bold">Products</h2>

        <div className="mb-4 flex">
          {data.products?.map(product => (
            <Link key={product.id} href={`/product/${product.slug}`}>
              <a className="text-blue-500 underline">
                <div className="mr-4 p-8 border border-gray-700 rounded-lg">
                  <div className="relative h-64 w-64">
                    {product.mainImage && product.mainImage.url ? (
                      <Image
                        src={product.mainImage.url}
                        alt={product.mainImage.description ?? product.mainImage.title}
                        layout="fill"
                        objectFit="contain"
                        quality="80"
                      />
                    ) : null}
                  </div>
                  <div className="mt-2 text-center">{product.name}</div>
                </div>
              </a>
            </Link>
          ))}
        </div>
        <pre>{JSON.stringify(data.products, null, 2)}</pre>
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

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const page = await getPageBySlug("products", preview)
  const navItems = await getSiteNavigationItems(preview)
  const metaData = await getSiteMetadata(preview)
  const products = await getProducts(preview, true)

  const data: IAppData = {
    preview,
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

export default Home
