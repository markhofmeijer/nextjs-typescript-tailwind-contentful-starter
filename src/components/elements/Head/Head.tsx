import React from "react"
import NextHead from "next/head"

import { IAppDataProps } from "@/types/app"

const Head: React.FC<IAppDataProps> = ({ data }) => {
  const { clientName } = data.metaData
  let { title, description, url, image, keywords } = data.metaData.seo
  const {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    image: pageImage,
    keywords: pageKeywords,
  } = data.page.seo
  const { locale } = data.page

  if (pageTitle) title = pageTitle
  if (pageDescription) description = pageDescription
  if (pageUrl) url = pageUrl
  if (pageImage) image = pageImage
  if (pageKeywords && pageKeywords.length > 0) keywords = [...keywords, ...pageKeywords]

  return (
    <NextHead>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="image" content={image.url} />
      <meta name="keywords" content={keywords.join(",")} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image.url} />
      <meta property="og:image:width" content={`${image.dimensions.width}`} />
      <meta property="og:image:height" content={`${image.dimensions.height}`} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      {locale ? <meta property="og:locale" content={locale} /> : null}
      <meta property="og:site_name" content={clientName} />
      <meta property="twitter:card" content="summary_large_image" />
      {/* <meta property="twitter:site" content={} />
      <meta property="twitter:creator" content={} /> */}
    </NextHead>
  )
}

export { Head }
