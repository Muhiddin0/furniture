"use client";

import { HeaderTrasform } from "@/app/functions";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

// functions
import { BacketToggle } from "@/app/functions";

// icons
import { IoBagHandleOutline } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";

type Props = {};

export const Header: React.FC<Props> = (props: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    let y = window.pageYOffset;
    HeaderTrasform(y, pathname);
  }, [pathname]);

  function HandleNavToggle() {
    document.querySelector("nav")?.classList.toggle("active");
  }

  useEffect(() => {
    window.addEventListener("scroll", function (e) {
      let y = this.window.pageYOffset;
      HeaderTrasform(y, pathname);
    });
  });

  return (
    <header className="sticky top-0 z-[9000] w-full">
      <div className="container flex justify-between items-center !py-4">
        <Link className="logo" href={"/"}>
          Panto.
        </Link>

        <nav className="flex">
          <ul className="flex gap-4 font-medium">
            <li className="flex justify-end items-center md:hidden">
              <button onClick={HandleNavToggle}>
                <LuMenu size={25} />
              </button>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/furnitures">Furnitures</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <div onClick={HandleNavToggle} className="flex-grow-[1]"></div>
        </nav>

        <div className="flex gap-5">
          <button onClick={BacketToggle} className="relative">
            <IoBagHandleOutline size={25} />
            <span className="badge bg-orange-500">0</span>
          </button>
          <button
            onClick={HandleNavToggle}
            className="block md:hidden cursor-pointer"
          >
            <LuMenu size={25} />
          </button>
        </div>
      </div>
    </header>
  );
};
