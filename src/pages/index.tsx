import React from "react"
import Image from "next/image"
import Link from "next/link"
// import Head from "next/head"

import { Layout } from "@/components/Layout"

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <div className="relative py-8 md:py-24" style={{ height: "40vh" }}>
        <Image
          src="/visuals/carpenter-001.jpg"
          alt="JS WoodDesign"
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
          <h1 className="text-3xl font-bold">JS WoodDesign</h1>
          <div>
            <p>Uw adres voor moderne, klassieke of industriële meubels en interieurwerken.</p>
            <p>
              We hebben al een breed aanbod meubilair en projecten naar tevredenheid mogen
              opleveren.
            </p>
            <p>
              <em>Wat kunnen wij voor u betekenen?</em>
            </p>
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

    //  <div>
    //    <Head>
    //      <title>Create Next App</title>
    //      <link rel="icon" href="/favicon.ico" />
    //    </Head>

    //    <main className="my-12 mx-auto w-1/2">
    //      <h1 className="text-2xl font-bold uppercase">Next.js Starter</h1>
    //      <ul>
    //        <li>* Next.js</li>
    //        <li>* TypeScript</li>
    //        <li>* Tailwinds CSS (incl. PostCSS)</li>
    //        <li>* ESLint</li>
    //        <li>* Prettier</li>
    //      </ul>
    //    </main>

    //    <footer className="my-0 mx-auto w-1/2">
    //      <a
    //        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //        target="_blank"
    //        rel="noopener noreferrer"
    //      >
    //        Powered by <img src="/vercel.svg" alt="Vercel Logo" className="w-24" />
    //      </a>
    //    </footer>
    //  </div>
  )
}

export default IndexPage
