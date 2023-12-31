import Link from "next/link";
import React from "react";

type Props = {};

export const HomeSection = (props: Props) => {
  return (
    <section className="text-white">
      <div className="container relative z-[10] flex items-center min-h-[1084px] flex-col !pt-6">
        <h1 className="text-[30px] sm:text-[30px] md:text-[60px] xl:text-[80px] font-bold capitalize max-w-[861px] text-center">
          Make your interior more minimalistic & modern
        </h1>
        <p className="max-w-[400px] text-center">
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </p>
      </div>
    </section>
  );
};
