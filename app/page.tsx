"use client";
import Image from "next/image";

// componetns
import {
  WhyChooes,
  HomeSection,
  HomeBg,
  BestSelleing,
  About,
  Clients,
  Footer,
} from "./components";

export default function Home() {
  return (
    <>
      <HomeSection />
      <WhyChooes />
      <BestSelleing />
      <About />
      <Clients />

      <Footer />

      {/* bg */}
      <HomeBg />
    </>
  );
}
