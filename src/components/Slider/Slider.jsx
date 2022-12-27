import React from 'react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../Card/Card';
import { SliderProducts } from "./Data";
import "./mainsyle.css";
import style from "./style.module.css";
export default function Slider() {
  return (
    <>
      <div className={style.sContainer}>
        <Swiper 
        className={style.mySwiper}
        modules={[Navigation, Pagination]}
        loopFillGroupWithBlank={true}
        slidesPerGroup={1}
        loop={true}
        spaceBetween={40}
        slidesPerView={3}
        navigation>
          {SliderProducts.map((item)=>{
            return (
            <SwiperSlide key={item.id}>
              <Card
                name={item.name} 
                detail={item.detail} 
                price={item.price} 
                img={item.img}
              />
            </SwiperSlide>)
          })}
        </Swiper>
      </div>
    
    </>
  )
}
