import Image from "next/image";
import React from "react";

// assets
import bg from "@/assets/images/home-bg.jpg";

type Props = {};

export const HomeBg = (props: Props) => {
  return (
    <div className="home-bg absolute top-0 left-0 h-[1084px] w-full">
      <Image className="w-full h-full object-cover" src={bg} alt="" />
      <span></span>
    </div>
  );
};
