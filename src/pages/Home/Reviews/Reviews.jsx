import React, { use, useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Reviews = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <Swiper
      loop={true}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 30,
        stretch: "50%",
        depth: 200,
        modifier: 1,
        slideShadows: true,
        scale: 0.75,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="mySwiper"
    >
      {data.map((item, index) => (
        <SwiperSlide key={index} className="p-8">
          <div className="max-w-md rounded-2xl bg-pink-100 p-6 shadow-sm">
            <FaQuoteLeft className="text-4xl mb-4" />

            <p className=" mb-6">
              A posture corrector works by providing support and gentle
              alignment to your shoulders, back, and spine, encouraging you to
              maintain proper posture throughout the day.
            </p>

            <div className="border-t border-dashed mb-6"></div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 ">
                <img className="rounded-full" src={item.user_photoURL} alt="" />
              </div>

              <div>
                <h4 className="font-bold ">{item.userName}</h4>
                <p className="text-sm ">{item.reviews}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Reviews;
