import React from 'react';
import { BsFire } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import { MdDone } from 'react-icons/md';
import { FaChartBar, FaChartPie } from "react-icons/fa";
import { AiFillInfoCircle } from "react-icons/ai";
import { IoStatsChart } from "react-icons/io5";

export default function Card({ title, icon, onClick }) {
  let iconComponent;
  switch (icon) {
    case 'chart':
      iconComponent = <FaChartBar size={30} />;
      break;
    case 'drone':
      iconComponent = <AiFillInfoCircle size={30} />;
      break;
    case 'statistics':
      iconComponent = <IoStatsChart size={30} />;
      break;
    default:
      iconComponent = <MdDone size={30} />;
      break;
  }
  return (
    <div
      className="selectCards hover:bg-zinc-200 rounded-lg shadow-xl text-black font-sans py-10 px-5  w-full cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-center items-center mb-4">
        {iconComponent}
      </div>
      <div className="flex justify-center text-2xl font-bold">
        {title}
      </div>
    </div>
  );
}
