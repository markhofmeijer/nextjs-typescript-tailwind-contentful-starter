require("dotenv").config({ path: ".env.local" })

const contentful = require("contentful-management")

module.exports = function () {
  const client = contentful.createClient({
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_PERSONAL_ACCESS_TOKEN,
  })

  return client
    .getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID)
    .then(space => space.getEnvironment(process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT))
}
