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
import { Navigation } from "swiper/modules";

import comment_bg_1 from "@/assets/images/commen-bg (1).png";
import comment_bg_2 from "@/assets/images/commen-bg (2).png";
import comment_bg_3 from "@/assets/images/commen-bg (3).png";

import user_1 from "@/assets/images/user (1).svg";
import user_2 from "@/assets/images/user (2).svg";
import user_3 from "@/assets/images/user (3).svg";

type Props = {};

export const Slider = (props: Props) => {
  const [comments, setComments] = useState([
    {
      bg: comment_bg_1,
      start: 3,
      user: {
        avatar: user_1,
        fullname: "Bang Upin",
        job: "Pedagang Asongan",
        comment:
          "“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“",
      },
    },
    {
      bg: comment_bg_2,
      start: 3,
      user: {
        avatar: user_2,
        fullname: "Ibuk Sukijan",
        job: "Ibu Rumah Tangga",
        comment:
          "“Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah“",
      },
    },
    {
      bg: comment_bg_3,
      start: 3,
      user: {
        avatar: user_3,
        fullname: "Mpok Ina",
        job: "Karyawan Swasta",
        comment:
          "“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“",
      },
    },
    {
      bg: comment_bg_3,
      start: 3,
      user: {
        avatar: user_3,
        fullname: "Mpok Ina",
        job: "Karyawan Swasta",
        comment:
          "“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“",
      },
    },
  ]);

  return (
    <div className="mt-12">
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={60}
        freeMode={true}
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
        }}
        className="mySwiper !py-16"
      >
        {comments.map((item, index) => (
          <SwiperSlide
            key={index}
            className="relative flex justify-center items-center gap-3 "
          >
            <div className="relative flex justify-center items-center w-full h-full">
              <div className="relative z-30 flex items-end h-[550px] p-4 overflow-hidden rounded-xl">
                <Image
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src={item.bg}
                  alt=""
                />
                <div className="relative z-30 bg-white rounded-xl w-full">
                  <div className="flex justify-center w-full">
                    <div className="relative -top-[35px] bg-white p-4 rounded-full">
                      <Image src={item.user.avatar} alt="" />
                    </div>
                  </div>
                  <div className="relative top-[-30px] p-3">
                    <b className="text-[var(--black)] text-center block text-[18px] font-extrabold">
                      {item.user.fullname}
                    </b>
                    <p className="text-slate-400 text-center">
                      {item.user.job}
                    </p>
                    <p className="text-[var(--black)] text-center mt-4">
                      {item.user.comment}
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  background: `url("${item.bg.src}"),
                  lightgray -84.803px -117.952px / 214.052% 164.683% no-repeat`,
                }}
                className="bg-blur-img absolute block bottom-[-15px] w-[70%] h-[100%]"
              ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
