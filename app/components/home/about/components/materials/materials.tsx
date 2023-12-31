import React from "react";

import Image from "next/image";

// assets
import room1 from "@/assets/images/room-1.svg";
import room2 from "@/assets/images/room-2.svg";
import room3 from "@/assets/images/room-3.svg";
import { LinkButton } from "@/app/components";

type Props = {};

export const Materials = (props: Props) => {
  return (
    <div className="flex justify-between items-center flex-col-reverse xl:flex-row gap-x-8 gap-y-16 text-[var(--black)] mt-[150px] xl:mt-[50px] pb-12">
      <div className="flex-grow-[2] xl:max-w-[550px]">
        <div className="flex flex-col gap-3">
          <p className="text-orange-500 uppercase">Materials</p>
          <b className="text-[42px] ">
            Very serious materials for making furniture
          </b>
          <p className="text-slate-400">
            Because panto was very serious about designing furniture for our
            environment, using a very expensive and famous capital but at a
            relatively low price
          </p>
          <LinkButton title="More Info" link="/" />
        </div>
      </div>
      <div className="flex-grow-[2]">
        <div className="2xl:w-[800px] grid grid-cols-5 grid-rows-7 gap-10">
          <div className="relative flex justify-center col-span-2 row-span-3">
            <Image className="relative z-30 w-full h-full" src={room1} alt="" />
            <div className="bg-blur-img room-1 absolute -bottom-[30px] w-[90%] h-[90%] block"></div>
          </div>
          <div className="relative col-span-2 row-span-4 col-start-1 row-start-4">
            <Image className="relative z-30 w-full h-full" src={room2} alt="" />
            <div className="bg-blur-img room-2 absolute -bottom-[30px] w-[90%] h-[90%] block"></div>
          </div>
          <div className="relative col-span-3 row-span-5 col-start-3 row-start-3">
            <Image
              className="relative z-30 w-full h-full !rounded-xl  object-cover"
              src={room3}
              alt=""
            />
            <div className="bg-blur-img room-3 absolute z-20 -bottom-[30px] w-[90%] h-[90%] block"></div>
            <div className="absolute z-10 -top-[35px] -right-[200px] xl:w-[495px] h-[422px] block rounded-2xl bg-[var(--bg-light)]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
