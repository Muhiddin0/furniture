"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";

// components
import { Counter } from "@/app/components/common/counter";

// assets
import stol_1 from "@/assets/images/stol/stol-1.svg";
import stol_2 from "@/assets/images/stol/stol-2.svg";
import stol_3 from "@/assets/images/stol/stol-3.svg";

// icons
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  id: number;
};

export const ProductDetails = () => {
  const [sliderItems, setSliderItems] = useState([stol_1, stol_2, stol_3]);
  const [pCount, setPCount] = useState<number>(1);

  const router = useRouter();

  function HandleGetBack() {
    router.back();
  }

  return (
    <section>
      <div className="container flex justify-between flex-col-reverse lg:flex-row gap-y-12 gap-x-6 items-center !py-12">
        <div className="flex flex-col w-full lg:w-[500px]">
          <button onClick={HandleGetBack} className="flex gap-2">
            <IoIosArrowRoundBack size={24} />
            <b>Back</b>
          </button>
          <b className="text-4xl mt-24">Meryl Lounge Chair</b>
          <div className="flex justify-between flex-wrap items-center mt-6">
            <b className="text-2xl">$149.99</b>
            <div className="flex items-center gap-2">
              <div className="flex gap-3 text-orange-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <FaRegStar />
              </div>
              <div className="flex gap-2">
                <b>4.6/5.0</b>
                <p className="text-slate-400">(155)</p>
              </div>
            </div>
          </div>
          <p className="text-slate-400 mt-10">
            The gently curved lines accentuated by sewn details are kind to your
            body and pleasant to look at. Also, there’s a tilt and
            height-adjusting mechanism that’s built to outlast years of ups and
            downs.
          </p>
          <div className="flex gap-3 my-7">
            <div className="block border-[5px] w-[30px] h-[30px] bg-[#C1BDB3] rounded-full cursor-pointer"></div>
            <div className="block border-[5px] border-[#0000] w-[30px] h-[30px] bg-[#58737D] rounded-full cursor-pointer"></div>
            <div className="block border-[5px] border-[#0000] w-[30px] h-[30px] bg-[#545454] rounded-full cursor-pointer"></div>
            <div className="block border-[5px] border-[#0000] w-[30px] h-[30px] bg-[#CBA5A5] rounded-full cursor-pointer"></div>
          </div>

          <div className="flex gap-3 flex-wrap">
            <Counter value={pCount} setValue={setPCount} />

            <button className="py-3 px-5 rounded-md bg-orange-500 text-white">
              Add to Cart
            </button>
          </div>

          <div className="my-5">
            <Link
              href={"/card"}
              className="flex justify-center items-center w-full p-3 bg-orange-500 hover:opacity-80 transition-all text-white rounded-lg"
            >
              Shop Now
            </Link>
          </div>

          <p className="text-slate-400 mt-6">
            Free 3-5 day shipping • Tool-free assembly • 30-day trial
          </p>

          <div className="flex justify-between text-[16px] mt-16">
            <div className="flex gap-2 items-center text-orange-500">
              <FaRegHeart />
              Add to Wishlist
            </div>
            <div className="flex gap-4">
              <FaFacebook size={24} />
              <FaTwitter size={24} />
              <FaPinterest size={24} />
              <FaInstagram size={24} />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-grow-[1]">
          <div className="">
            <div>
              <Image className="w-[400px]" src={stol_1} alt="" />
            </div>
            <Swiper
              loop={true}
              slidesPerView={5}
              spaceBetween={24}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode]}
              className="category-slider w-full"
            >
              {sliderItems.map((item, index) => (
                <SwiperSlide
                  className="!flex !justify-center !items-center"
                  key={index}
                >
                  <Image
                    className="object-contain !w-full !h-full"
                    src={item}
                    alt="brand image"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
