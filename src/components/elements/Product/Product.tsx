import React from "react"
import Image from "next/image"
import Link from "next/link"

import { IProduct } from "@/types/product"

const Product: React.FC<IProduct> = props => {
  const { slug, category, mainImage, name } = props

  // Calculate image dimensions based on original aspect ratio
  const { dimensions: imageDimensions } = props.mainImage

  let imageWidth = 400
  let imageHeight = 266
  switch (imageDimensions.orientation) {
    case "LANDSCAPE": {
      const scaledHeight = imageDimensions.height / (imageDimensions.width / imageWidth)
      if (scaledHeight < imageHeight) {
        imageHeight = scaledHeight
      } else {
        imageWidth = imageHeight * imageDimensions.aspectRatio
      }
      break
    }
    case "PORTRAIT": {
      const scaledWidth = imageDimensions.width / (imageDimensions.height / imageHeight)
      if (scaledWidth < imageWidth) {
        imageWidth = scaledWidth
      } else {
        imageHeight = imageWidth * imageDimensions.aspectRatio
      }
      break
    }
    default:
      imageWidth = imageHeight
      break
  }

  // Render component
  const product = (
    <div className="px-4 pt-12 pb-8 leading-6 sm:leading-7 space-y-4">
      <div className="text-center">
        <Image
          src={mainImage.url}
          alt={mainImage.description ?? mainImage.title}
          width={imageWidth}
          height={imageHeight}
          className="rounded"
        />
      </div>
      <div className="text-sm md:text-xs lg:text-sm font-semibold text-center truncate">{name}</div>
      {slug ? (
        <div className="text-center">
          <button className="inline-block px-2 py-1 rounded-md bg-primary hover:bg-primary-dark tracking-wide text-sm text-white font-semibold transition duration-400 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            Meer informatie
          </button>
        </div>
      ) : null}
    </div>
  )

  const content = slug ? (
    <Link href={`/${category.toLowerCase()}/${slug}`}>
      <a>{product}</a>
    </Link>
  ) : (
    product
  )

  return (
    <div>
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-lighter to-secondary shadow-lg transform skew-y-0 -rotate-6 rounded-xl sm:rounded-3xl"></div>
        <div className="relative px-4 bg-white shadow-lg rounded-xl sm:rounded-3xl">{content}</div>
      </div>
    </div>
  )
}

export { Product }
