import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import React, { useEffect } from "react";
import "swiper/css/pagination";
import { customSwiperProps } from "@/typings";
import LandingSlideItem from "../cards/LandingSlideItem";

const CustomSwiper = ({
  children,
  spaceBetween = 0,
  slidesPerView = 1,
  data,
}: customSwiperProps) => {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      pagination={true}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
    >
      {data.map((post, index) => {
        return (
          <SwiperSlide key={index}>
            <LandingSlideItem post={post} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CustomSwiper;
