"use client";

import Image from "next/image";
import React, { useState } from "react";

// components
import { Counter } from "@/app/components/common/counter";

// assets
import card from "@/assets/images/card/card-1.svg";

type Props = {};

export const CardItem = (props: Props) => {
  const [pCount, setPCount] = useState<number>(1);

  return (
    <div className="flex justify-between gap-3 p-3 border-b-[1px] border-slate-300">
      <div className="flex gap-3">
        <Image src={card} alt="" />
        <div className="flex flex-col gap-3">
          <b className="text-[20px]">Osmond Armchair</b>
          <div className="flex gap-3">
            <p className="text-slate-400">Color</p>
            <b>Gunnared biege</b>
          </div>

          <div className="flex gap-5 mt-4">
            <Counter value={pCount} setValue={setPCount} />
            <button className="text-red-500 font-extrabold">Remove</button>
          </div>
        </div>
      </div>
      <b className="text-xl">$39.00</b>
    </div>
  );
};
