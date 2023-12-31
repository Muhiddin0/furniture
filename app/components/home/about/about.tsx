import React from "react";

// components
import { Experiences } from "./components/experiences/experiences";
import { Materials } from "./components/materials/materials";

type Props = {};

export const About = (props: Props) => {
  return (
    <section className=" overflow-hidden">
      <div className="container !py-12">
        <Experiences />
        <Materials />
      </div>
    </section>
  );
};
