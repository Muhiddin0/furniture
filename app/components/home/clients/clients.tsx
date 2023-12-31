import React from "react";
import { Slider } from "./components/slider";

type Props = {};

export const Clients: React.FC<Props> = (Props) => {
  return (
    <section>
      <div className="container !py-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-orange-500 uppercase text-center">Testimonials</p>
          <b className="text-[var(--black)] text-[42px] text-center">
            Our Client Reviews
          </b>
        </div>
        <Slider />
      </div>
    </section>
  );
};
