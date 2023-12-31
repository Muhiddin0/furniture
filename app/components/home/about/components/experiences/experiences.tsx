import React from "react";

// assets
import experiences from "@/assets/images/experence.svg";
import Image from "next/image";

// commons
import { LinkButton } from "@/app/components";

type Props = {};

export const Experiences: React.FC<Props> = (props: Props) => {
  return (
    <div className="flex items-center justify-between gap-y-12 flex-col xl:flex-row min-h-[700px] mt-[150px] xl:mt-[50px]">
      <div className="md:w-[629px] md:h-[445px] relative">
        <div className="absolute -left-[20%] -top-[50px] md:w-[495px] md:h-[301px] block bg-[var(--bg-light)] rounded-xl"></div>
        <div className="absolute left-[180px] top-[80px] md:w-[495px] md:h-[301px] block bg-[var(--bg-light)] rounded-xl"></div>
        <Image className="relative z-10 rounded-2xl" src={experiences} alt="" />
        <div className="flex justify-center items-center ">
          <div className="eperence-bg absolute bottom-[-20px] md:top-[20px] w-[90%] md:w-[400px] h-[90%] md:h-[445px]">
            salom
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 w-full xl:w-[45%] xl:pl-[60px]">
        <p className="text-orange-500 uppercase">experiences</p>
        <b className="text-[42px] capitalize">
          we provide you the best experience
        </b>
        <p className="text-slate-400">
          You don’t have to worry about the result because all of these
          interiors are made by people who are professionals in their fields
          with an elegant and lucurious style and with premium quality materials
        </p>
        <LinkButton title="More Info" link="/all" />
      </div>
    </div>
  );
};
