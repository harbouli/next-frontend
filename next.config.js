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
 
  // images: {
  //   domains: [process.env.API_IMG],

  // },
  reactStrictMode: true,
}