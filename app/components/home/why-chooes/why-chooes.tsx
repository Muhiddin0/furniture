import Link from "next/link";
import React from "react";

// icons
import { IoIosArrowRoundForward } from "react-icons/io";

type Props = {};

export const WhyChooes = (props: Props) => {
  return (
    <section>
      <div className="container !py-12">
        <div className="grid md:grid-cols-3 xl:grid-cols-4 grid-rows-1 gap-8 text-[var(--black)]">
          <div className="text-[42px] flex items-center justify-center xl:justify-start font-bold col-span-3 xl:col-span-1 text-center xl:text-start">
            Why Choosing Us
          </div>
          <div className="flex flex-col gap-4 col-span-3 md:col-span-1">
            <b className="text-[24px] font-bold">Luxury facilities</b>
            <p className="text-slate-400">
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
            <Link
              className="flex gap-4 items-center text-orange-500"
              href={"./"}
            >
              <span>More Info</span>
              <IoIosArrowRoundForward size={22} />
            </Link>
          </div>
          <div className="flex flex-col gap-4 col-span-3 md:col-span-1">
            <b className="text-[24px] font-bold">Luxury facilities</b>
            <p className="text-slate-400">
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
            <Link
              className="flex gap-4 items-center text-orange-500"
              href={"./"}
            >
              <span>More Info</span>
              <IoIosArrowRoundForward size={22} />
            </Link>
          </div>
          <div className="flex flex-col gap-4 col-span-3 md:col-span-1">
            <b className="text-[24px] font-bold">Luxury facilities</b>
            <p className="text-slate-400">
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
            <Link
              className="flex gap-4 items-center text-orange-500"
              href={"./"}
            >
              <span>More Info</span>
              <IoIosArrowRoundForward size={22} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
