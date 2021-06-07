import React from "react"
import { GetStaticProps, GetStaticPaths } from "next"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

import { PreviewBanner } from "@/components/modules/Banner"
import getSiteMetadata from "@/utils/contentful/siteMetadata/getSiteMetadata"
// import getProductSlugs from "@/utils/contentful/product/getProductSlugs"
import getProductBySlug from "@/utils/contentful/product/getProductBySlug"
import Markdown from "@/utils/markdown"

import { IAppData, IAppDataProps } from "@/types/app"

const Home: React.FC<IAppDataProps> = ({ data }) => {
  if (!data) return null

  const product = data.products[0]
  const pageTitle = product.seo.title ?? data.metaData.seo.title

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {data.preview ? <PreviewBanner /> : null}
      <main className="my-12 mx-auto w-1/2">
        <Link href="/products">
          <a className="text-blue-500 underline">Back</a>
        </Link>

        <h1 className="text-3xl font-bold uppercase my-4">Next.js Starter</h1>
        <h2 className="text-2xl font-bold">{product.name}</h2>
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
        <div className="mb-8">
          <Markdown src={product.description} />
        </div>
        <div className="mb-4 flex">
          {product.atmosphericImages.map(image => (
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

export const getStaticProps: GetStaticProps = async ({ preview = false, params }) => {
  console.log(params)

  const product = await getProductBySlug(params.slug, preview)
  const metaData = await getSiteMetadata(preview)

  const data: IAppData = {
    preview,
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
  //   const productSlugs = await getProductSlugs()
  //   const paths = productSlugs.map(({ slug }) => `/product/${slug}`) ?? []

  return {
    //  paths,
    //  fallback: false,
    paths: [],
    fallback: true,
  }
}

export default Home
