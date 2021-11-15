require ("dotenv").config()

module.exports = {
  env: {
    API_URL: process.env.API_URL,
    API_IMG: process.env.API_IMG

  },
  // publicRuntimeConfig: {
  //   API_URL: process.env.API_URL,
  //   API_IMG: process.env.API_IMG
  // },
 
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    loader: "default",
    domains: ["res.cloudinary.com"],
  },
  reactStrictMode: true,
}