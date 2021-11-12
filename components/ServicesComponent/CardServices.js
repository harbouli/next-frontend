import Card from './Card'
const CardServices = (props)=>{
    return(
        <div className="max-w-6xl mx-auto my-20 ">
            <div className="grid gap-6 lg:grid-cols-3 ">
            {props.services.map(service =>(
                <Card key={service.id} services={service} />
            ))}
            </div>
        </div>
    )
}
export default CardServices