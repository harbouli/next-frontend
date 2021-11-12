import Services from '../components/AllServices'
import Hero from '../components/Hero'
import About from '../components/About'




export default function Home({services}) {

  return (
    <div>
      <Hero/>
      <About/>
      <Services service={services} />
    </div>
  )
}


 export async function getStaticProps () {
   const {API_URL} = process.env
   const res = await fetch(`${API_URL}/services`)
   const data = await res.json()
   return {
       props: { 
          services: data
       }, 
       revalidate: 3600,
     }
 }
