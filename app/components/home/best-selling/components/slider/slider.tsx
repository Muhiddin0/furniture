"use client";

import React, { createRef, useEffect, useRef, useState } from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";

// assets
import fur1 from "@/assets/images/furnitures/fur-1.svg";
import fur2 from "@/assets/images/furnitures/fur-2.svg";
import fur3 from "@/assets/images/furnitures/fur-3.svg";
import fur4 from "@/assets/images/furnitures/fur-4.svg";

// icons
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";
import { SliderCard } from "./slider-card";

type Props = {};

export const Slider = (props: Props) => {
  const [furnitures, setFurnitures] = useState([
    {
      type: "Chair",
      name: "Sakarias Armchair",
      star: 3,
      price: 392,
      img: fur1,
    },
    {
      type: "Chair",
      name: "Baltsar Chair",
      star: 3,
      price: 392,
      img: fur2,
    },
    {
      type: "Chair",
      name: "Baltsar Chair",
      star: 3,
      price: 392,
      img: fur3,
    },
    {
      type: "Chair",
      name: "Baltsar Chair",
      star: 3,
      price: 392,
      img: fur4,
    },
    {
      type: "Chair",
      name: "Baltsar Chair",
      star: 3,
      price: 392,
      img: fur2,
    },
    {
      type: "Chair",
      name: "Baltsar Chair",
      star: 3,
      price: 392,
      img: fur3,
    },
  ]);

  // swiper ref
  const swiperRef = useRef<Swiper | null>(null);

  const handlePrev = () => {
    swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current.slideNext();
  };
  useEffect(() => {
    SwiperCore.use([Navigation]); // Register navigation module

    const swiper = swiperRef.current;
    if (swiper) {
      swiper.navigation = {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      };
    }
  }, []);
  return (
    <div className="mt-12 px-16">
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={60}
        freeMode={false}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
            width: 768,
            slidesPerView: 2,
          },
          1024: {
            width: 1024,
            slidesPerView: 3,
          },
          1280: {
            width: 1280,
            slidesPerView: 4,
          },
        }}
        className="!py-12"
      >
        {furnitures.map((item, index) => (
          <SwiperSlide
            key={index}
            className="best-selling-card relative flex flex-col gap-3"
          >
            <SliderCard img={item.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
