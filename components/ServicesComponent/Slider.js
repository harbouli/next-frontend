import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import 'swiper/css';



export default function Slider(props) {
  
return(
  <>
     <Swiper
        spaceBetween={5}
        slidesPerView={3}
    > 
   
    {
      props?.services.slice(0, 5).map((s)=>{
        return (
            <SwiperSlide key={s.id}>
              <Image 
              src={s.Image.url}
              height={500}
              width={520}
              />
            </SwiperSlide>
        )
      })
    }
      
      
    </Swiper>
  </>
  )
}

























// import { Swiper, SwiperSlide } from 'swiper/react';
// import Image from 'next/image'
// import Link from 'next/link'
// import "swiper/css";
// import "swiper/css/free-mode"
// import "swiper/css/pagination"
// import SwiperCore, { Pagination} from 'swiper';
// SwiperCore.use([Pagination]);
// export default function Slider(props){
//     return(
//         <>
//                 <Swiper slidesPerView={3}  pagination={{ "clickable": true}} >
//             {props?.services.map((service) =>{
//                 return(
//                     <SwiperSlide>
//                         <Image
//                         src={service.Image.url}
//                         alt={service.Description_IMG}
//                         layout="fill"
//                         objectFit="cover"
                        
//                     /></SwiperSlide>
//                 )
//             }

//             )}
        

//         </Swiper>
//         </>
//     )
// }