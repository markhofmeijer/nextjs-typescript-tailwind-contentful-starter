import React from "react"

// import Image, { GatsbyImageFluidProps } from "gatsby-image"

interface PropTypes {
  title: string
  // image?: GatsbyImageFluidProps
  content: string
}

const ContentPage: React.FC<PropTypes> = () => (
  //{ title, image, content }
  <>
    <div>test</div>
    {/* <div className="py-8 bg-primary-lighter bg-opacity-75 text-center">
			<div className="container">
				<h1 className="text-3xl font-bold">{title}</h1>
			</div>
		</div>

		{image ? (
			<div className="relative md:hidden">
				<Image fluid={image.fluid} alt={image.title} title={image.title} className="w-full" />
				<div className="absolute inset-0 bg-white opacity-10" />
			</div>
		) : null}

		<div className="container overflow-hidden pt-4 md:pt-8 pb-8">
			{image ? (
				<div className="relative hidden md:block w-1/2 float-right ml-4 rounded-sm">
					<Image fluid={image.fluid} alt={image.title} title={image.title} className="rounded" />
					<div className="absolute inset-0 bg-white opacity-10" />
				</div>
			) : null}
			<div
				dangerouslySetInnerHTML={{
					__html: content,
				}}
			/>
		</div> */}
  </>
)

export { ContentPage }
