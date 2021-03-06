import Head from 'next/head'
import CardServices from "../../components/ServicesComponent/CardServices";


export default function Services ({services}){
    return (
        <>
            <Head>
                <title>Services</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="keywords" content="Services, Branding"/>
                <meta name="description" content=" All What You Schould To Know About Our Services" />
            </Head>
            <div className="w-full bg-indigo-700 py-32">
                <h1 className="text-6xl font-bold text-center text-white">Services</h1>
                <p className="text-gray-50 text-center text-xl mt-7">
                    All What You Schould To Know About Our Services
                </p>
            </div>
            <CardServices services={services} />
        </>
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