import Image from "next/image";
import Link from "next/link";
import React from "react";

// assets
import arrwo from "@/assets/icons/arrow.svg";

type Props = {
  link: string;
  title: string;
};

export const LinkButton = ({ link, title }: Props) => {
  return (
    <Link className="flex gap-3 font-bold text-orange-500" href={link}>
      <span>{title}</span>
      <Image src={arrwo} alt="" />
    </Link>
  );
};
