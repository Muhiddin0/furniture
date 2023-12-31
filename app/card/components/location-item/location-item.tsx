import React from "react";

type Props = {};

export const LocationItem: React.FC<Props> = () => {
  return (
    <div className="flex gap-4 p-4">
      <div className="flex justify-center items-center flex-wrap border-[5px] border-orange-500 w-[30px] h-[30px] bg-white rounded-full">
        <span className="w-[15px] h-[15px] block bg-orange-500 rounded-full"></span>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between flex-wrap w-full">
          <b>Huzefa Bagwala</b>
          <div className="flex items-center gap-2">
            <button className="">Edit</button>
            <span>|</span>
            <button className="text-red-500">Delete</button>
          </div>
        </div>

        <p className="text-slate-400">
          1131 Dusty Townline, Jacksonville, TX 40322
        </p>
      </div>
    </div>
  );
};
