/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"



// import Swiper core and required modules
import SwiperCore, {
    Autoplay,
  EffectFade,
  Navigation,
  Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation,Autoplay,Pagination,EffectFade]);



const SliderApropos = () => {
    
    
    return (
        <div>
        {/* <Swiper pagination={true} effect={'fade'} autoplay={{"delay":2000}} lazy={true} navigation={true} loop={true} className="mySwiper hero">
                <SwiperSlide className="hero"><img src="./images/bg-vignes-apropos.jpg" alt="" /></SwiperSlide>
                <SwiperSlide className="hero"><img src="./images/bg-vigne-apropos-2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide className="hero"><img src="./images/bg-vigne-apropos-3.jpg" alt="" /></SwiperSlide>

        </Swiper> */}
        <Swiper effect={'fade'} pagination={{'clickable':true}} navigation={true} autoplay={{'delay':5000}} loop={true} className="mySwiper">
            <SwiperSlide><img src="./images/bg-vignes-apropos.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="./images/bg-vigne-apropos-2.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="./images/bg-vigne-apropos-3.jpg" alt="" /></SwiperSlide>
  
        </Swiper>
        </div>
    );
};

export default SliderApropos;