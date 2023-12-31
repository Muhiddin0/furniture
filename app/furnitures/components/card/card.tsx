import Image from "next/image";
import React from "react";

import mebel from "@/assets/images/furnitures/fur-1.svg";

type Props = {};

export const Card = (props: Props) => {
  return (
    <div className="p-3 bg-[var(--bg-light)] rounded-md">
      <Image src={mebel} alt="" />
      <div className="flex flex-col gap-4 mt-6">
        <b className="text-[20px]">Stol stule</b>
      </div>
    </div>
  );
};
