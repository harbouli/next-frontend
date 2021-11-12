import Lottie from 'lottie-react'
import aboutPc from '../svg/about.json'
const About = ()=>{
    return (
        <div className=" bg-gray-100 w-full py-16 my-16">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-4 gap-x-9">
                <h1 className="text-6xl font-bold text-center lg:col-start-3 lg:col-span-2 lg:text-right">Why Us</h1>
                <div className="col-span-2 lg:my-24 ">
                    <Lottie animationData={aboutPc}/>
                </div>
                <div className="lg:col-span-2 text-center lg:text-left my-20 ">
                    <p className=" text-xl leading-10"> Our company values you and understands your expectations. In a way, it seems we exist only to ensure a successful relationship between us and you, as a potential partner! Our concerns are centered around your digital transformation. A website can be created, social resources can be managed, it has to do with positioning your brand on the market and creating unique experiences for your customers, with the aim of generating performance-based results. We will not tell you that we are the agency you need, so do you still doubt us? Don't be afraid, and let's embark on an adventure.</p>
                </div>
            </div>
        </div>
    )
}
export default About