import React from "react"
import { GetStaticProps, GetStaticPaths } from "next"
import Head from "next/head"
import Link from "next/link"

import getPageSlugs from "@/utils/contentful/page/getPageSlugs"
import getPageBySlug from "@/utils/contentful/page/getPageBySlug"
import getSiteMetadata from "@/utils/contentful/siteMetadata/getSiteMetadata"
import Markdown from "@/utils/markdown"

import { IAppData, IAppDataProps } from "@/types/app"

const Home: React.FC<IAppDataProps> = ({ data }) => {
  const { title, description } = data.page
  const pageTitle = data.page.seo.title ?? data.metaData.seo.title

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="my-12 mx-auto w-1/2">
        <Link href="/">
          <a className="text-blue-500 underline">Back</a>
        </Link>

        <h1 className="text-3xl font-bold uppercase my-4">Next.js Starter</h1>
        <h2 className="text-2xl font-bold">{title}</h2>
        <Markdown src={description} />
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
  const page = await getPageBySlug(params.slug, preview)
  const metaData = await getSiteMetadata(preview)

  const data: IAppData = {
    preview,
    page,
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
    pageSlugs.filter(({ slug }) => !["/"].includes(slug)).map(({ slug }) => `/${slug}`) ?? []

  return {
    paths,
    fallback: false,
  }
}

export default Home
