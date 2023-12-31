import React, { useState } from "react";

import { FaCheck } from "react-icons/fa";

type Props = {};

export const Filter: React.FC<Props> = (props) => {
  const [color, setColor] = useState<string[]>([
    "#f045",
    "#1045",
    "#1f55",
    "#1365",
    "#1f65",
    "#136f",
    "#13ff",
    "#f39f",
  ]);

  function HandleFilterActive(index: number) {
    document
      .querySelectorAll(".color-filter")
      [index]?.classList.toggle("active");
  }

  return (
    <div className="flex flex-col gap-3 p-3  max-w-[300px] lg:w-full h-full bg-white">
      <div className="flex justify-between">
        <p>Filter</p>
        <button className="text-red-500 font-extrabold">Remove Filter</button>
      </div>

      <ul className="mt-6">
        <li className="flex gap-2">
          <input type="checkbox" />
          <label htmlFor="">Mebels</label>
        </li>
        <li className="flex gap-2">
          <input type="checkbox" />
          <label htmlFor="">Furnitures</label>
        </li>
        <li className="flex gap-2">
          <input type="checkbox" />
          <label htmlFor="">Stols</label>
        </li>
        <li className="flex gap-2">
          <input type="checkbox" />
          <label htmlFor="">Rooms</label>
        </li>
        <li className="flex gap-2">
          <input type="checkbox" />
          <label htmlFor="">Other</label>
        </li>
      </ul>

      <ul className="mt-6">
        <li className="flex gap-2">
          <input type="checkbox" />
          <label htmlFor="">Mebels</label>
        </li>
        <li className="flex gap-2">
          <input type="checkbox" />
          <label htmlFor="">Furnitures</label>
        </li>
        <li className="flex gap-2">
          <input type="checkbox" />
          <label htmlFor="">Stols</label>
        </li>
        <li className="flex gap-2">
          <input type="checkbox" />
          <label htmlFor="">Rooms</label>
        </li>
        <li className="flex gap-2">
          <input type="checkbox" />
          <label htmlFor="">Other</label>
        </li>
      </ul>

      <div className="flex flex-col gap-3 my-5">
        <div className="flex gap-1 border-slate-300 border-[1px] rounded-md p-2">
          <span>Min</span>
          <input className="w-full border-0 outline-none" type="text" />
        </div>
        <div className="flex gap-1 border-slate-300 border-[1px] rounded-md p-2">
          <span>Max</span>
          <input className="w-full border-0 outline-none" type="text" />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-3">
        {color.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center cursor-pointer"
          >
            <span
              onClick={() => HandleFilterActive(index)}
              style={{ background: item }}
              className="rounded-full w-[30px] h-[30px]"
            >
              <span className="color-filter flex justify-center items-center w-full h-full rounded-full backdrop-blur-md text-white">
                <FaCheck size={16} />
              </span>
            </span>
          </div>
        ))}
      </div>

      <button className="flex justify-center items-center w-full px-3 py-3 hover:opacity-80 transition-all mt-4 rounded-md bg-orange-500 text-white">
        Use Filter
      </button>
      <br />
    </div>
  );
};
