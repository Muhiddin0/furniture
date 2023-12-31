import React from "react";
import Image from "next/image";

import error404 from "@/assets/images/404.svg";

type Props = {};

const ErrorPage: React.FC<Props> = (props) => {
  return (
    <div className="flex justify-center items-center flex-col gap-5 p-4 min-h-[90vh]">
      <div className="max-w-[600px] px-10">
        <Image src={error404} alt="" />
      </div>
      <h1 className="text-[24px] md:text-[46px] text-center font-extrabold">
        Page not found
      </h1>
    </div>
  );
};

export default ErrorPage;
