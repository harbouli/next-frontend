import Image from 'next/image'

export default function Card(props){
    console.log(props.services.thumbnail[0].formats.large.url)
    const {API_URL} = process.env
    return(
        <div className="w-full h-60 overflow-y-hidden  relative ">
            
            <p className=" ">{props.services.Service_Titel}</p>


            <img
            src={API_URL + props.services.thumbnail[0].formats.large.url}
            className="blackW"
            />
            
            
        </div>
    )
}