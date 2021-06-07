import React from "react"
import { GetStaticProps } from "next"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

import { PreviewBanner } from "@/components/modules/Banner"
import getProducts from "@/utils/contentful/product/getProducts"

import { IAppData, IAppDataProps } from "@/types/app"

const Home: React.FC<IAppDataProps> = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {data.preview ? <PreviewBanner /> : null}
      <main className="my-12 mx-auto w-1/2">
        <Link href="/">
          <a className="text-blue-500 underline">Back</a>
        </Link>

        <h1 className="text-3xl font-bold uppercase my-4">Next.js Starter</h1>
        <h2 className="text-2xl font-bold">Products</h2>

        <div className="mb-4 flex">
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
        <pre>{JSON.stringify(data.products, null, 2)}</pre>
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
  const products = await getProducts(preview, true)

  const data: IAppData = {
    preview,
    products,
  }

  return {
    props: {
      data,
    },
  }
}

export default Home
