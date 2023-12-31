import React from "react";

type Props = {};

const Addres = (props: Props) => {
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
        </div>
        <div className="col-span-4 text-[var(--black)]">
          <form className="flex flex-col border-[1px] border-slate-300 rounded-md p-4">
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

export default Addres;
