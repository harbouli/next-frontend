const Box = (props)=>{
    return(
        
        
            <div className="py-2 px-6 border-solid border-gray-300 border rounded-full text-gray-800 my-2  mx-2 ">
                <p className=" font-medium text-xl">
                    {props.services.Service_Titel}
                </p>
            </div>

        )
}


export default Box