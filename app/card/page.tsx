import React from "react";

// components
import { CardItem, LocationItem } from "./components";

// icons
import { MdOutlineDiscount } from "react-icons/md";

// assets
import select from "@/assets/icons/select.svg";
import Image from "next/image";

type Props = {};

const Card = (props: Props) => {
  return (
    <section>
      <div className="container grid grid-cols-12 gap-8">
        <div className="col-span-8">
          <div className="flex items-center gap-3">
            <b className="text-[32px] font-extrabold">Cart</b>
            <p className="text-[20px] text-slate-400">2 ITEMS</p>
          </div>
          <div className="flex flex-col gap-12 my-12">
            <CardItem />
            <CardItem />
          </div>

          <div className="flex flex-col gap-6">
            <LocationItem />
            <LocationItem />
            <div className="p-4 border-t-[1px] border-slate-400">
              <button className="text-orange-500">+ add new location</button>
            </div>
          </div>

          <div className="py-2 mt-12">
            <div className="flex gap-3 p-4 bg-[var(--bg-light)] rounded-[6px_6px_0_0]">
              <Image src={select} alt="" />
              <h1>When receiving by cash or card</h1>
            </div>
            <form className="flex flex-col gap-4 p-4 bg-[var(--bg-light)] rounded-[0_0_6px_6px]">
              <div className="flex gap-4 w-full">
                <label className="flex flex-col gap-2 w-[50%]">
                  <span className="text-slate-400">First name *</span>
                  <input className="order-input" type="text" />
                </label>
                <label className="flex flex-col gap-2 w-[50%]">
                  <span className="text-slate-400">Last name *</span>
                  <input className="order-input" type="text" />
                </label>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-slate-400">Phone number *</span>
                <div className="flex border-md border-slate-300 border-[1px] px-3 py-2 rounded-md w-[200px] bg-white">
                  <span>+998</span>
                  <input className="w-full outline-none border-none" type="" />
                </div>
              </div>
            </form>
          </div>

          <div className="py-6 mt-2 rounded-md">
            <div className="flex gap-3 p-4 rounded-md bg-[var(--bg-light)]">
              <Image src={select} alt="" />
              <div>
                <b>When receiving by cash or card</b>
                <p className="text-slate-400">
                  Pay at the reception office or when picking up the order from
                  the courier
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative col-span-4 text-[var(--black)]">
          <form className="sticky top-[100px] flex flex-col border-[1px] border-slate-300 rounded-md p-4">
            <b className="text-xl">Order Summary</b>
            <ul className="w-full mt-3 py-4">
              <li className="flex justify-between w-full space-y-1">
                <p className="text-slate-400">Price</p>
                <b className="">$319.98</b>
              </li>
              <li className="flex justify-between w-full space-y-1">
                <p className="text-slate-400">Discount</p>
                <b className="">$31.9</b>
              </li>
              <li className="flex justify-between w-full space-y-1">
                <p className="text-slate-400">Shipping</p>
                <b className="">Free</b>
              </li>
              <li className="flex justify-between w-full space-y-1">
                <p className="text-slate-400">Coupon Applied</p>
                <b className="">$0.00</b>
              </li>
            </ul>
            <span className="block w-full h-[1px] bg-slate-400"></span>
            <ul className="w-full mt-3 py-4">
              <li className="flex justify-between w-full space-y-1">
                <b>TOTAL</b>
                <b className="">$319.98</b>
              </li>
              <li className="mt-3 relative">
                <input
                  placeholder="Coupon Code"
                  className="p-2 rounded-md w-full border-slate-400 border-[1px] outline-none"
                  type="text"
                />
                <span className="absolute right-2 top-[50%] translate-y-[-50%] text-slate-400">
                  <MdOutlineDiscount size={22} />
                </span>
              </li>
            </ul>

            <button className="flex justify-center items-center text-white bg-orange-500 w-full py-4 px-3 rounded-md hover:opacity-80 transition-all mt-10">
              Proceed to Checkout
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Card;
