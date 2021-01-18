import React from "react"
import { GetStaticProps } from "next"
import Image from "next/image"
import Link from "next/link"
// import Head from "next/head"

import { Head } from "@/components/elements/Head"
import { IAppData, IAppDataProps } from "@/types/app"
import { Layout } from "@/components/layouts"
import getPageBySlug from "@/utils/contentful/page/getPageBySlug"
import getSiteNavigationItems from "@/utils/contentful/siteNavigation/getSiteNavigationItems"
import getSiteMetadata from "@/utils/contentful/siteMetadata/getSiteMetadata"
import Markdown from "@/utils/markdown"

const IndexPage: React.FC<IAppDataProps> = ({ data }) => {
  const { title, description, image } = data.page

  return (
    <Layout data={data}>
      <Head data={data} />
      <div className="relative py-8 md:py-24" style={{ height: "40vh" }}>
        <Image
          src={image.url}
          alt={image.description}
          layout="fill"
          className="object-center object-cover pointer-events-none"
          quality={40}
        />
        <div className="relative z-1 flex flex-col">
          <div className="text-center tracking-wide text-2xl leading-normal md:text-4xl md:leading-normal text-white font-semibold">
            deskundig,
          </div>
          <div className="text-center tracking-wide text-2xl leading-normal md:text-4xl md:leading-normal text-white font-semibold">
            stijlvol,
          </div>
          <div className="text-center tracking-wide text-3xl leading-normal md:text-5xl md:leading-normal text-white font-bold italic">
            Twents vakmanschap
          </div>
          <div className="text-center">
            <Link href="/tafels">
              <a className="inline-block mt-8 px-4 py-2 border-2 border-white rounded-md bg-primary hover:bg-primary-dark tracking-wide text-white font-semibold transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                Bekijk onze tafels
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="py-8 bg-primary-lighter bg-opacity-75 text-center">
        <div className="container">
          <h1 className="text-3xl font-bold">{title}</h1>
          <div>
            <Markdown src={description} />
          </div>
        </div>
      </div>

      <div className="py-8">
        <div className="container">
          <div className="pb-8 text-center">
            <h2 className="text-2xl font-bold">Recent opgeleverd</h2>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const page = await getPageBySlug("/")
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

export default IndexPage
