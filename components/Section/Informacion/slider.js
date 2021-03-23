import React from 'react';
import Swiper from 'swiper/bundle';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import 'swiper/swiper-bundle.css';


const Slider = () => {

    SwiperCore.use([Navigation, Pagination]);

    const swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span className="' + className + '">' + (index + 1) + '</span>';
          },
        }
    });

    return ( 
        <div className="swiper-container column">
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