"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { SliderCard } from "@/app/components/home/best-selling/components/slider/slider-card";

// components
import * as Components from "./components";

// icons
import * as io from "react-icons/io";
import { VscSettings } from "react-icons/vsc";

// assets
import fur1 from "@/assets/images/furnitures/fur-1.svg";
import fur2 from "@/assets/images/furnitures/fur-2.svg";
import fur3 from "@/assets/images/furnitures/fur-3.svg";
import fur4 from "@/assets/images/furnitures/fur-4.svg";
import { HeaderTrasform } from "../functions";

type Props = {};

const Product = (props: Props) => {
  const pathname = usePathname();

  const [furnitures, setFurnitures] = useState([
    {
      type: "Chair",
      name: "Sakarias Armchair",
      star: 3,
      price: 392,
      img: fur1,
      id: 1,
    },
    {
      type: "Chair",
      name: "Baltsar Chair",
      star: 3,
      price: 392,
      img: fur2,
      id: 2,
    },
    {
      type: "Chair",
      name: "Baltsar Chair",
      star: 3,
      price: 392,
      img: fur3,
      id: 3,
    },
    {
      type: "Chair",
      name: "Baltsar Chair",
      star: 3,
      price: 392,
      img: fur4,
      id: 4,
    },
    {
      type: "Chair",
      name: "Baltsar Chair",
      star: 3,
      price: 392,
      img: fur2,
      id: 5,
    },
    {
      type: "Chair",
      name: "Baltsar Chair",
      star: 3,
      price: 392,
      img: fur3,
      id: 6,
    },
  ]);

  useEffect(() => {
    HeaderTrasform(window.pageYOffset, pathname);
  }, []);

  function HandleFilterToggle() {
    document.querySelector(".filter")?.classList.toggle("active");
  }

  return (
    <section>
      <div className="container grid grid-cols-12 gap-6">
        <div className="scroll-disable filter fixed top-0 left-0 z-[9999] lg:static col-span-3 overflow-auto flex w-full bg-[var(--transparent-black)] lg:bg-transparent lg:w-auto h-full lg:h-[88vh]">
          <Components.Filter />
          <div
            onClick={HandleFilterToggle}
            className="flex-grow-[1] h-full block"
          ></div>
        </div>
        <div className="scroll-disable col-span-12 lg:col-span-9 h-[88vh] overflow-auto">
          <div className="block lg:hidden mt-5">
            <button
              onClick={HandleFilterToggle}
              className="flex gap-2 rounded-md"
            >
              Filter
              <VscSettings size={22} />
            </button>
          </div>

          <div className="my-12">
            <div className="flex items-center gap-3 my-8">
              <b className="text-3xl">Stollar</b>
              <io.IoIosArrowForward size={30} />
            </div>
            <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 mt-12">
              {furnitures.map((item, index) => (
                <SliderCard id={item.id} key={index} img={item.img} />
              ))}
            </div>
          </div>
          {/* <div className="my-12">
            <div className="flex items-center gap-3 my-8">
              <b className="text-3xl">Stollar</b>
              <io.IoIosArrowForward size={30} />
            </div>
            <div className="grid grid-cols-4 gap-x-8 gap-y-12 mt-12">
              {furnitures.map((item, index) => (
                <SliderCard id={item.id} key={index} img={item.img} />
              ))}
            </div>
          </div>
          <div className="my-12">
            <div className="flex items-center gap-3 my-8">
              <b className="text-3xl">Stollar</b>
              <io.IoIosArrowForward size={30} />
            </div>
            <div className="grid grid-cols-4 gap-x-8 gap-y-12 mt-12">
              {furnitures.map((item, index) => (
                <SliderCard id={item.id} key={index} img={item.img} />
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default Product;
