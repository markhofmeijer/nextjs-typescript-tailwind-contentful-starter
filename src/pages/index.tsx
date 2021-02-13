import React from "react"
import { GetStaticProps } from "next"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

import getPageBySlug from "@/utils/contentful/page/getPageBySlug"
import getSiteNavigationItems from "@/utils/contentful/siteNavigation/getSiteNavigationItems"
import getSiteMetadata from "@/utils/contentful/siteMetadata/getSiteMetadata"
import getHomepageProducts from "@/utils/contentful/product/getHomepageProducts"
import Markdown from "@/utils/markdown"

import { IAppData, IAppDataProps } from "@/types/app"

const Home: React.FC<IAppDataProps> = ({ data }) => {
  const { title, description } = data.page

  return (
    <div>
      <Head>
        <title>{data.metaData.seo.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="my-12 mx-auto w-1/2">
        <h1 className="text-3xl font-bold uppercase mb-4">Next.js Starter</h1>
        <h2 className="text-2xl font-bold">Features</h2>
        <ul className="mb-4">
          <li>* Next.js</li>
          <li>* TypeScript</li>
          <li>* Tailwinds CSS (incl. PostCSS)</li>
          <li>* Contentful (incl. SDK integration, Preview mode)</li>
          <li>* ESLint</li>
          <li>* Prettier</li>
        </ul>
        <h2 className="text-2xl font-bold mb-2">Contentful</h2>
        <h3 className="text-xl font-bold mb-1">Page</h3>
        <pre>{JSON.stringify(data.page, null, 2)}</pre>
        <h4 className="mt-2 font-bold">{title}</h4>
        <Markdown src={description} />
        <h3 className="text-xl font-bold mt-4 mb-1">Menu items</h3>
        <pre>{JSON.stringify(data.navItems, null, 2)}</pre>
        <ul className="mt-2">
          {data.navItems.map(item => (
            <li key={item.id}>
              -{" "}
              <Link href={`/${item.slug}`}>
                <a className="text-blue-500 underline">{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
        <h3 className="text-xl font-bold mt-4 mb-1">Metadata</h3>
        <pre>{JSON.stringify(data.metaData, null, 2)}</pre>
        <h3 className="text-xl font-bold mt-4 mb-1">Products (homepage)</h3>
        <pre>{JSON.stringify(data.products, null, 2)}</pre>
        <div className="mt-2 flex">
          {data.products.map(product => (
            <Link key={product.id} href={`/product/${product.slug}`}>
              <a className="text-blue-500 underline">
                <div className="mr-4 p-8 border border-gray-700 rounded-lg">
                  <div className="relative h-64 w-64">
                    <Image
                      src={product.mainImage.url}
                      alt={product.mainImage.description ?? product.mainImage.title}
                      layout="fill"
                      objectFit="contain"
                      quality="80"
                    />
                  </div>
                  <div className="mt-2 text-center">{product.name}</div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </main>

      <footer className="my-4 mx-auto w-1/2">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className="w-24" />
        </a>
      </footer>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const page = await getPageBySlug("/", preview)
  const navItems = await getSiteNavigationItems(preview)
  const metaData = await getSiteMetadata(preview)
  const products = await getHomepageProducts(preview, true)

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
