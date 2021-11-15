import Services from '../components/AllServices'
import Hero from '../components/Hero'
import About from '../components/About'
import Head from 'next/head'
import { fetchAPI } from '../lib/api'



export default function Home({home}) {

  return (
    <>
      <Head>
      <meta charset="UTF-8" />
      <title>{home.Seo.Title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content={home.Seo.keywords}/>
        <meta name="description" content={home.Seo.Description} />
        <meta property="og:title" content={home.WebSiteTitet} />
        <meta property="og:url" content="https://www.exampel.com/" />
        <meta property="og:image" content={home.Seo.open_graph_image.url} />
      </Head>
      <Hero/>
      <About/>
      <Services service={services} />
    </>
  )
}


 export async function getStaticProps () {
   const homeAPI =  fetchAPI('home')
   return {
       props: { 
          home: homeAPI
       }, 
       revalidate: 3600,
     }
 }
