import React from "react"
import { ParsedUrlQuery } from "querystring"
import { GetStaticProps, GetStaticPaths } from "next"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import vercelLogo from "../../public/vercel.svg"

import { PreviewBanner } from "@/components/modules/Banner"
import { Markdown } from "@/components/elements/Markdown"
import getPageSlugs from "@/utils/contentful/page/getPageSlugs"
import getPageBySlug from "@/utils/contentful/page/getPageBySlug"
import getSiteMetadata from "@/utils/contentful/siteMetadata/getSiteMetadata"

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
        <h2 className="text-2xl font-bold">{data.page.title}</h2>
        <Markdown src={data.page.description} />
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
  const page = await getPageBySlug(slug, preview)
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
