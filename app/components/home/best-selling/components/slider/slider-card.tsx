import Image from "next/image";
import React from "react";

import shadow from "@/assets/images/shadow.svg";

// icons
import { FaRegStar, FaStar } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";

type Props = {
  img: string;
  id: number;
};

export const SliderCard: React.FC<Props> = ({ img, id }) => {
  return (
    <div className="furnitur-card">
      <Link
        href={"/furnitures/" + id}
        className="relative flex justify-center items-center h-[200px]"
      >
        <Image
          width={200}
          className="!h-[full] object-contain"
          src={img}
          alt=""
        />
        <Image
          width={150}
          height={150}
          className="absolute bottom-0"
          src={shadow}
          alt=""
        />
      </Link>
      <div className="flex flex-col mt-6 bg-white p-3 rounded-[0_0_10px_10px]">
        <p className="text-slate-400">Chair</p>
        <Link href={"/furnitures/" + id}>
          <b>Sakarias Armchair</b>
        </Link>
        <div className="mt-2">
          <span className="flex gap-2 text-orange-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
            <FaRegStar />
          </span>
        </div>
        <div className="w-full flex items-center justify-between text-xl mt-4">
          <b>
            <sup>$</sup>
            392
          </b>
          <button className="flex justify-center items-center w-[48px] h-[48px] rounded-full bg-[var(--black)] text-white hover:opacity-80 transition-all">
            <AiOutlinePlus size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};
