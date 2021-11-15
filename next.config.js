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
    loader: 'cloudinary',
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  reactStrictMode: true,
}