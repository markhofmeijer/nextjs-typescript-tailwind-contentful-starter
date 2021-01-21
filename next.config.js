const isProd = process.env.NODE_ENV === "production"
const withPWA = require("next-pwa")

module.exports = withPWA({
  images: {
    domains: ["images.ctfassets.net"],
  },
  pwa: {
    disable: !isProd,
    dest: "public",
  },
})
