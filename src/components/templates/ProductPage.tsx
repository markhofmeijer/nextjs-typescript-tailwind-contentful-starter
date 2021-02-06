import React from "react"

import { Product } from "@/components/elements/Product"
import Markdown from "@/utils/markdown"

import { IAppDataProps } from "@/types/app"

const ProductPage: React.FC<IAppDataProps> = ({ data }) => {
  const product = data.products[0]
  const { name, description } = product

  const productList = product.atmosphericImages
    ? product.atmosphericImages.map(relatedImage => {
        return (
          <Product
            key={relatedImage.id}
            id={relatedImage.id}
            name={relatedImage.title}
            slug={null}
            category={null}
            homepage={null}
            deliveryDate={null}
            mainImage={relatedImage}
            seo={null}
          />
        )
      })
    : [<Product key={product.id} {...product} slug={null} />]

  return (
    <>
      <div className="py-8 bg-primary-lighter bg-opacity-75 text-center">
        <div className="container">
          <h1 className="text-3xl font-bold">{name}</h1>
        </div>
      </div>

      <div className="container overflow-hidden pt-4 md:pt-8 pb-8">
        <Markdown src={description} />
      </div>

      {productList && productList.length > 0 ? (
        <div className="container pt-8 pb-16 grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
          {productList}
        </div>
      ) : null}
    </>
  )
}

export { ProductPage }
