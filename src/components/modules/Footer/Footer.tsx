import React from "react"

const Footer: React.FC = () => {
  // const data = useStaticQuery(graphql`
  // 	query {
  // 		site {
  // 			siteMetadata {
  // 				author {
  // 					name
  // 					website
  // 				}
  // 				client {
  // 					name
  // 					address
  // 					zipCode
  // 					city
  // 					phone
  // 					email
  // 				}
  // 			}
  // 		}
  // 	}
  // `)

  // const { siteMetadata } = data.site
  // const { author, client } = siteMetadata

  return (
    <footer className="py-2 bg-primary-lighter bg-opacity-50 text-xs">
      <div className="container md:flex justify-between">
        FOOTER
        {/* <div>
					{client.name} - <span className="whitespace-no-wrap">{client.address}</span>
					{" - "}
					<span className="whitespace-no-wrap">
						{client.zipCode} {client.city}
					</span>
					{" - "}
					<span className="whitespace-no-wrap">{client.phone}</span>
				</div>
				<div className="pt-4 md:pt-0">
					<a href={author.website} target="blank" className="hover:underline">
						{`©${new Date().getFullYear()} - ${author.name}`}
					</a>
				</div> */}
      </div>
    </footer>
  )
}

export { Footer }
