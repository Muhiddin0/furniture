import React from "react";
import Image from "next/image";

// assets
import plus from "@/assets/icons/plus.svg";
import minuse from "@/assets/icons/minuse.svg";

interface Props {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

export const Counter = ({ value, setValue }: Props) => {
  return (
    <div className="flex justify-between w-[160px] border-[1px] border-[var(--black)] rounded-md p-[16px]">
      <button
        onClick={() => setValue(value > 1 ? value - 1 : value)}
        className="font-extrabold"
      >
        <Image src={minuse} alt="" />
      </button>
      <input
        value={value}
        className="w-[50px] text-center border-none outline-none font-extrabold"
      />
      <button onClick={() => setValue(value + 1)}>
        <Image src={plus} alt="" />
      </button>
    </div>
  );
};
