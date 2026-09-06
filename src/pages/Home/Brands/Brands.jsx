import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../../../assets/brands/amazon.png";
import amazon_vector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import mooonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import start from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const Brands = () => {
  return (
    <div>
      <h3 className="text-secondary font-extrabold text-3xl text-center mt-10 mb-9">We've helped thousands of sales teams</h3>
      <Swiper
        className="my-5"
        loop={true}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img src={amazon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={amazon_vector} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={casio} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mooonstar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={randstad} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={star} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={start} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Brands;
