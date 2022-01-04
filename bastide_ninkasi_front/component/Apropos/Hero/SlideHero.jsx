/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image from 'next/image'
import { Slide, Fade } from 'react-slideshow-image'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import SwiperCore, {
    EffectCoverflow,Pagination,Navigation,
  } from 'swiper';
import img1 from '../../../public/images/bg-vignes-apropos.jpg'
import img2 from '../../../public/images/bg-vigne-apropos-2.jpg'
import img3 from '../../../public/images/bg-vigne-apropos-3.jpg'
import img4 from '../../../public/images/verre-vin.jpg'
import img5 from '../../../public/images/verre-champ.jpg'
import img6 from '../../../public/images/verre-whisky.jpg'

SwiperCore.use([EffectCoverflow,Pagination,Navigation]);

// const proprietes = {
//     duration : 5000,
//     transitionDuration: 500,
//     infinite: true,
//     indicators: true,
//     arrows: true,


// }

// const swiper = new Swiper('.swiper', {
//     autoplay: {
//       delay: 5000,
//     },
//    });

const SlideHero = () => {
    return (
        <div id="slide" className="md:relative containerSlide">
            {/* <Fade className="z-0" {...proprietes}>
                    <div className="each-slide"> */}
                    {/* <Image src={img1} alt="image de vignes avec fond mer" width={1920} height={950}></Image> */}
                    {/* <img src="./images/bg-vignes-apropos.jpg" alt="" />
                    </div>
            
                    
                    <div className="each-slide"> */}
                    {/* <Image src={img2} alt="image de vignes avec fond mer" width={1920} height={950}></Image> */}
                    {/* <img src="./images/bg-vigne-apropos-2.jpg" alt="" />
                    </div>
            
                    
                    <div className="each-slide"> */}
                    {/* <Image src={img3} alt="image de vignes avec fond mer" width={1920} height={950}></Image> */}
                    {/* <img src="./images/bg-vigne-apropos-3.jpg" alt="" />
                    </div>

            </Fade> */}
            <div className="headerPropos bg-rouge md:hidden"></div>
            <Swiper navigation={true} loop={true} className="mySwiper hero">
                <SwiperSlide className="hero"><img src="./images/bg-vignes-apropos.jpg" alt="" /></SwiperSlide>
                <SwiperSlide className="hero"><img src="./images/bg-vigne-apropos-2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide className="hero"><img src="./images/bg-vigne-apropos-3.jpg" alt="" /></SwiperSlide>

            </Swiper>
            
            <div className="hidden lg:block lg:mx-auto lg:monSlide">
                <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={6} coverflowEffect={{
                    "rotate": 50,
                    "stretch": 0,
                    "depth": 100,
                    "modifier": 1,
                    "slideShadows": true,
                    
                    }} pagination={true} loop={true} className="mySwiper">
                    
                        <SwiperSlide><Image src={img4} width={500} height={450}></Image></SwiperSlide>
                        <SwiperSlide><Image src={img5} width={500} height={450}></Image></SwiperSlide>
                        <SwiperSlide><Image src={img6} width={500} height={450}></Image></SwiperSlide>
            
                </Swiper>
            </div>
  

        </div>
    );
};

export default SlideHero;