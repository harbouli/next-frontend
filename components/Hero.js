import Lottie from 'lottie-react';
import * as WebAnimation from '../svg/data.json'
import Link from 'next/link';


export default function Hero({home}) {
    return (
      <div className=" my-12 lg:mt-16 lg:mb-48 z-0 lg:max-w-6xl mx-auto grid   lg:grid-cols-3 gap-3">
           <div className="font-bold text-4xl lg:text-5xl leading-12 text-center my-9 lg:mb-0 lg:text-left">
               IMPROVE <br/> <span className="linehero relative z-0">YOUR WORK</span> EFFICIENCY
               <div className="mt-7">
                <p className=" text-lg font-medium text-gray-600 w-4/5 mx-auto lg:w-full text-center mb-7 lg:mb-0 lg:text-left">
                {home.Description}
                  </p>
            </div>
            <div  className="mt-10">
              <Link href="/Contact">
                <a className="text-lg bg-blue-600 rounded-full shadow-xl  hover:bg-blue-500 text-white py-6 px-16 ">Let's Talk</a>
              </Link>
            </div>
            </div>
            <Lottie animationData={WebAnimation} className=" col-span-2  z-0 " />
            

      </div>
    )
  }