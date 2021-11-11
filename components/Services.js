import Box from "./Box"

function Services(props){
    
    return(
        <div className=" pt-24 max-w-6xl mx-auto grid lg:grid-cols-5 gap-10 lg:gap-72">
            <h1 className='font-bold text-6xl lg:col-span-1'>Services</h1>
            <div className="flex flex-wrap lg:col-span-4">
                {props.service.map(service =>(
                    
                    <Box key={service.id} services={service} />
                ))}
                
            </div>
        </div>
    )
}

export default Services


 




