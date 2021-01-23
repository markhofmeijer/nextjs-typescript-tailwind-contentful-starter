import React from "react"
import Image from "next/image"

import Markdown from "@/utils/markdown"

import { IAppDataProps } from "@/types/app"

const ContentPage: React.FC<IAppDataProps> = ({ data }) => {
  const { title, image, description } = data.page

  return (
    <>
      <div className="py-8 bg-primary-lighter bg-opacity-75 text-center">
        <div className="container">
          <h1 className="text-3xl font-bold">{title}</h1>
        </div>
      </div>
      {image ? (
        <div className="relative md:hidden" style={{ height: "30vh" }}>
          <Image
            src={image.url}
            alt={image.description ?? image.title}
            layout="fill"
            className="object-center object-cover pointer-events-none"
            quality={40}
          />
          <div className="absolute inset-0 bg-white opacity-10" />
        </div>
      ) : null}
      <div className="container overflow-hidden pt-4 md:pt-8 pb-8">
        {image ? (
          <div
            className="relative hidden md:block w-1/2 float-right ml-4 rounded-sm"
            style={{ height: "35vh" }}
          >
            <Image
              src={image.url}
              alt={image.description ?? image.title}
              layout="fill"
              className="object-center object-cover pointer-events-none rounded"
              quality={40}
            />
            x
            <div className="absolute inset-0 bg-white opacity-10" />
          </div>
        ) : null}
        <Markdown src={description} />
      </div>
    </>
  )
}
//{ title, image, content }

/* 

		

		*/

export { ContentPage }
