import Box from "./Box"
import Slider from "./ServicesComponent/Slider"
import Link from "next/dist/client/link"

function Services(props){
    return(<>
        <div className=" py-24 max-w-6xl  mx-auto grid lg:grid-cols-5 gap-10 lg:gap-72">
            <div className='lg:col-span-1'>
                <h1 className='font-bold text-6xl  text-center lg:text-left'>Services</h1>
            </div>

            <div className="flex flex-wrap lg:col-span-4">

                { props?.services.map(service =>(
                    
                    <Box key={service.id} services={service} />
                ))}
                
            </div>
            
        </div>
        <Slider  services={props.services} />
        </>
    )
}

export default Services


 




