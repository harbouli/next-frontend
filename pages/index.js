import Services from '../components/Services'
import Hero from '../components/Hero'




export default function Home({services}) {

  return (
    <div>
      {
        services.map(service =>{
          return
          <div>
            {service.Service_Titel}
          </div>
        })
      }
      <Hero/>
      <Services service={services} />
    </div>
  )
}


 export async function getServerSideProps () {
   const {API_URL} = process.env
   const res = await fetch(`${API_URL}/services`)
   const data = await res.json()
   return {
       props: { 
          services: data
       }, 
     }
 }
