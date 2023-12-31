import React from "react";

// assets
import furniture from "@/assets/images/furnitures/fur-1.svg";
import Image from "next/image";

// icons
import { GrClose } from "react-icons/gr";

// functions
import { BacketToggle } from "@/app/functions";

type Props = {};

export const Basket = (props: Props) => {
  return (
    <div className="backend fixed top-0 left-0 flex w-full h-screen bg-[var(--transparent-black)] p-4">
      <div className="absolute right-0 top-0 flex flex-col gap-4 w-[300px] h-full p-4 bg-white">
        <div>
          <button onClick={BacketToggle}>
            <GrClose />
          </button>
        </div>

        <div className="flex p-4 gap-3 rounded-md border-slate-300 border-[1px]">
          <Image
            width={50}
            height={50}
            className="object-contain"
            src={furniture}
            alt=""
          />
          <div className="flex flex-col flex-wrap gap-2">
            <b className="w-full">Mery Lounger Chaild</b>
            <div className="flex justify-between">
              <p>$23.10</p>
              <button className="text-red-500 cursor-pointer">Remove</button>
            </div>
          </div>
        </div>
        <div className="flex p-4 gap-3 rounded-md border-slate-300 border-[1px]">
          <Image
            width={50}
            height={50}
            className="object-contain"
            src={furniture}
            alt=""
          />
          <div className="flex flex-col flex-wrap gap-2">
            <b className="w-full">Mery Lounger Chaild</b>
            <div className="flex justify-between">
              <p>$23.10</p>
              <button className="text-red-500 cursor-pointer">Remove</button>
            </div>
          </div>
        </div>

        <button className="flex justify-center items-center rounded-md hover:opacity-80 transition-all bg-orange-500 py-4 px-3 text-white text-center">
          Shop Now !
        </button>
      </div>

      <div onClick={BacketToggle} className="flex-grow-[1] h-full"></div>
    </div>
  );
};
