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
        <div>
          {metaData.clientName} -{" "}
          <span className="whitespace-no-wrap">{metaData.clientAddress}</span>
          {" - "}
          <span className="whitespace-no-wrap">
            {metaData.clientZipCode} {metaData.clientCity}
          </span>
          {" - "}
          <span className="whitespace-no-wrap">{metaData.clientPhone}</span>
        </div>
        <div className="mt-4 md:mt-0">
          <SocialMediaRibbon data={data} />
        </div>
        <div className="mt-4 md:mt-0">
          <a href={authorWebsite} target="blank" className="hover:underline">
            {`©${new Date().getFullYear()} - ${authorName}`}
          </a>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
