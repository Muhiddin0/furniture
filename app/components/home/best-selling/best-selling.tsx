"use client";

import React, { useEffect } from "react";

// componetns
import { Header, Slider } from "./components";
import Link from "next/link";
import Image from "next/image";

// commons
import { LinkButton } from "../..";

type Props = {};

export const BestSelleing: React.FC<Props> = (props) => {
  return (
    <section className="py-6 bg-[var(--bg-light)]">
      <div className="container">
        <h1 className="text-3xl text-center text-[var(--black)] my-8 font-extrabold">
          Best Selling Product
        </h1>
        <Header />
        <Slider />

        <div className="flex justify-center items-center">
          <LinkButton title="View all" link="/all" />
        </div>
      </div>
    </section>
  );
};
