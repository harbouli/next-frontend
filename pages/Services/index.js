import CardServices from "../../components/ServicesComponent/CardServices";
import  fetchAPI from "../../lib/api"

export default function Services ({services}){
    return (
        <div >
            <div className="w-full bg-indigo-700 py-32">
                <h1 className="text-6xl font-bold text-center text-white">Services</h1>
                <p className="text-gray-50 text-center text-xl mt-7">
                    All What You Schould To Know About Our Services
                </p>
            </div>
            <CardServices services={services} />
        </div>
)
}

export async function getStaticProps () {
    const servicesData = fetchAPI('/services')
    return {
        props: { 
           services: servicesData
        }, 
        revalidate: 3600,
      }
  }