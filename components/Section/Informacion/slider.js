import React from 'react';
import Image from "next/image";

const Slider = () => {
    return ( 
        <div className="swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <img src="/entradacuv.jpg"/>
                </div>
                <div className="swiper-slide">
                    <img src="/picina.jpg"/>
                </div>
                <div className="swiper-slide">
                    <img src="/teatro.jpg"/>
                </div>
                <div className="swiper-slide">
                    <img src="/teatrolibre.jpg"/>
                </div>
            </div>
            <div className="swiper-pagination"></div>
        </div>
     );
}
 
export default Slider;