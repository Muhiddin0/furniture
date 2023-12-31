"use client";

import React, { createRef } from "react";

type Props = {};

export const Header = (props: Props) => {
  const activebgRef = createRef<HTMLDivElement>();

  function handleChangeItem(toleft: string) {
    document.documentElement.style.setProperty("--best-seling-active", toleft);
  }

  return (
    <div className="flex justify-center items-center text-[var(--black)] font-medium">
      <ul className="relative flex gap-2 max-[500px]:gap-5 py-2 px-3 rounded-full bg-[var(--gray-light)]">
        <div
          ref={activebgRef}
          className="active-bg absolute px-3 left-[var(--best-seling-active)] flex justify-center items-center z-2 w-[120px] h-[30px]"
        >
          <div className="w-auto min-[500px]:w-[100px] h-[30px] rounded-full bg-white left-0"></div>
        </div>
        <li
          onClick={() => handleChangeItem("0px")}
          className="relative z-20 flex items-center justify-center w-auto min-[500px]:w-[100px] h-[30px]  cursor-pointer rounded-full"
        >
          Chair
        </li>
        <li
          onClick={() => handleChangeItem("108px")}
          className="relative z-20 flex items-center justify-center w-auto min-[500px]:w-[100px] h-[30px]  cursor-pointer rounded-full"
        >
          Beds
        </li>
        <li
          onClick={() => handleChangeItem("216px")}
          className="relative z-20 flex items-center justify-center w-auto min-[500px]:w-[100px] h-[30px]  cursor-pointer rounded-full"
        >
          Sofa
        </li>
        <li
          onClick={() => handleChangeItem("322px")}
          className="relative z-20 flex items-center justify-center w-auto min-[500px]:w-[100px] h-[30px]  cursor-pointer rounded-full"
        >
          Lamp
        </li>
      </ul>
    </div>
  );
};
