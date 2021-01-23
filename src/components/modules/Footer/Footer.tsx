import React from "react"

import { SocialMediaRibbon } from "@/components/modules/SocialMedia"

import { IAppDataProps } from "@/types/app"

const Footer: React.FC<IAppDataProps> = ({ data }) => {
  const { metaData } = data

  const authorName = "Click-Designs"
  const authorWebsite = "https://www.click-designs.nl"

  return (
    <footer className="py-2 bg-primary-lighter bg-opacity-50 text-xs">
      <div className="container md:flex justify-between">
        <div className="md:flex md:items-center">
          <span className="whitespace-no-wrap">{metaData.clientName}</span>
          <span className="inline-block mx-1">-</span>
          <span className="whitespace-no-wrap">{metaData.clientAddress}</span>
          <span className="inline-block mx-1">-</span>
          <span className="whitespace-no-wrap">
            {metaData.clientZipCode} {metaData.clientCity}
          </span>
          <span className="inline-block mx-1">-</span>
          <span className="whitespace-no-wrap">{metaData.clientPhone}</span>
        </div>
        <div className="mt-2 md:mt-0 md:flex md:items-center opacity-70">
          <SocialMediaRibbon data={data} />
        </div>
        <div className="mt-8 md:mt-0 flex items-center justify-center">
          <a href={authorWebsite} target="blank" className="hover:underline">
            <span className="whitespace-no-wrap">
              {`©${new Date().getFullYear()} - ${authorName}`}
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
