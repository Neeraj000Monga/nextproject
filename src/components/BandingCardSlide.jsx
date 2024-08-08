"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";

import Avtar from "../assets/men_image..png";
import StarImage from "../assets/StarImage.png";
import Image from "next/image";

function BandingCardSlide() {
  const cards = [
    {
      id: 1,
      name: "STEVENB1181",
      country: "UNITED STATES",
      review:
        "This is the 6th engagement I have had with Mike. He will work day and night for you.",
      rating: 5,
    },
    {
      id: 2,
      name: "STEVENB1181",
      country: "UNITED STATES",
      review:
        "This is the 6th engagement I have had with Mike. He will work day and night for you.",
      rating: 5,
    },
    {
      id: 3,
      name: "STEVENB1181",
      country: "UNITED STATES",
      review:
        "This is the 6th engagement I have had with Mike. He will work day and night for you.",
      rating: 5,
    },
    {
      id: 4,
      name: "STEVENB1181",
      country: "UNITED STATES",
      review:
        "This is the 6th engagement I have had with Mike. He will work day and night for you.",
      rating: 5,
    },
    {
      id: 5,
      name: "STEVENB1181",
      country: "UNITED STATES",
      review:
        "This is the 6th engagement I have had with Mike. He will work day and night for you.",
      rating: 5,
    },
    {
      id: 5,
      name: "STEVENB1181",
      country: "UNITED STATES",
      review:
        "This is the 6th engagement I have had with Mike. He will work day and night for you.",
      rating: 5,
    },
  ];
  return (
    <div className="container pt-12">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={4}
        spaceBetween={100}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 35,
          modifier: 3.1,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="bg-white p-4 rounded-lg w-[300px]">
              <div className="flex ">
                <Image
                  style={{
                    borderRadius: "25px",
                    width: "50px",
                    height: "50px",
                  }}
                  src={Avtar}
                  alt="Magic Image"
                  className="w-12 h-12"
                />
                <div className="pl-2">
                  <div className="flex w-full justify-between">
                    <div>
                      <p className="font-bold text-[18px] text-black">
                        {card.name}
                      </p>
                      <p className="text-gray-600 text-[10px]">
                        {card.country}
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-blue-600"
                    >
                      <path d="M20.25 0H3.75C1.68 0 0 1.68 0 3.75v16.5C0 22.32 1.68 24 3.75 24h16.5c2.07 0 3.75-1.68 3.75-3.75V3.75C24 1.68 22.32 0 20.25 0zM7.5 19.5h-3v-9h3v9zM5.25 8.76c-.69 0-1.25-.56-1.25-1.25 0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25c0 .69-.56 1.25-1.25 1.25zM19.5 19.5h-3v-4.5c0-1.38-.47-2.25-1.62-2.25-1.12 0-1.78.75-2.07 1.47-.11.27-.14.66-.14 1.03v4.25h-3s.04-8.25 0-9h3v1.25c.4-.62 1.13-1.5 2.75-1.5 2.03 0 3.5 1.31 3.5 4.19v5.06z" />
                    </svg>
                  </div>
                  <p
                    className="text-black font-semibold text-[8px] pt-2"
                    style={{ lineHeight: 1.3 }}
                  >
                    {card.review}
                  </p>
                  <div className="flex gap-2 pt-2">
                    {[...Array(card.rating)].map((_, i) => (
                      <div key={i}>
                        <Image
                          style={{ width: "20px", height: "20px" }}
                          src={StarImage}
                          alt="Magic Image"
                          className="h-4 w-4"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BandingCardSlide;
