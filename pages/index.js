import Services from '../components/AllServices'
import Hero from '../components/Hero'
import About from '../components/About'
import Head from 'next/head'
import Slider from '../components/ServicesComponent/Slider'



export default function Home({home,services}) {
  return (
    <>
      <Head>
      <title>{home.Seo.Title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content={home.Seo.keywords}/>
        <meta name="description" content={home.Seo.Description} />
        <meta property="og:title" content={home.WebSiteTitet} />
        <meta property="og:url" content="https://www.exampel.com/" />
        <meta property="og:image" content={home.Seo.open_graph_image.url} />
      </Head>
      <Hero home={home}/>
      <About/>
      <Services services={services} />
      
    </>
  )
}


 export async function getStaticProps () {

  const {API_URL} = process.env
  const [HomeRes, ServicesRes] = await Promise.all([
    fetch(`${API_URL}/home`), 
    fetch(`${API_URL}/services`)
  ]);


  const [Home, Services] = await Promise.all([
    HomeRes.json(), 
    ServicesRes.json()
  ]);

  return {
       props: { 
          home: Home,
          services: Services
       }, 
       revalidate: 36,
     }
 }
