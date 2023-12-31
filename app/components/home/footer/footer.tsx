import React from "react";

// icons
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className="bg-[var(--bg-light)] py-16">
      <div className="container">
        <div className="grid grid-cols-5 grid-rows-1 gap-4">
          <div className="col-span-5 lg:col-span-2">
            <b className="text-[28px]">Panto</b>
            <p className="mt-4 text-[var(--black)]">
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
          </div>
          <div className="col-span-5 md:col-span-1 lg:col-start-3">
            <ul className="text-[var(--black)]">
              <li className="text-orange-500">Services</li>
              <li className="">Email Marketing</li>
              <li className="">Campaigns</li>
              <li className="">Branding</li>
            </ul>
          </div>
          <div className="col-span-5 md:col-span-1 lg:col-start-4">
            <ul className="text-[var(--black)]">
              <li className="text-orange-500">Furniture</li>
              <li className="">Beds</li>
              <li className="">Chair</li>
              <li className="">All</li>
            </ul>
          </div>
          <div className="col-span-5 md:col-span-1 lg:col-start-5">
            <ul className="text-[var(--black)]">
              <li className="text-orange-500">Follow Us</li>
              <li className="flex gap-3 items-center">
                <FaFacebookF /> Facebook
              </li>
              <li className="flex gap-3 items-center">
                <FaTwitter /> Twitter
              </li>
              <li className="flex gap-3 items-center">
                <AiOutlineInstagram />
                Instagram
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between flex-col sm:flex-row gap-3 mt-8">
          <p className="text-slate-400">Copyright © 2021</p>
          <div className="flex gap-4 text-[var(--black)]">
            <b>Terms & Conditions</b>
            <b>Privacy Policy</b>
          </div>
        </div>
      </div>
    </footer>
  );
};
