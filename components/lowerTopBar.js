import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

export default function LowerTopBar() {
  const router = useRouter();


  const isActive = (path) => {
    return router.pathname === path;
  };

  return (
    <div
      className=" w-screen bg-black text-slate-200 bg-opacity-80 font-sans shadow-lg flex justify-center "
    >
      <div className="flex gap-x-5">
        <div
          className={`p-4 transition duration-300 ${isActive("/")
            ? "border-b-4 border-green-600"
            : "hover:border-b-4 border-green-600 cursor-pointer"
            }`}
        >
          <Link href="/">
            <span className={`flex items-center text-lg font-medium`}>
              Main
            </span>
          </Link>
        </div>
        <div
          className={`p-4 transition duration-300 ${isActive("/charts")
            ? "border-b-4 border-green-600"
            : "hover:border-b-4 border-green-600 cursor-pointer"
            }`}
        >
          <Link href="/charts">
            <span className={`flex items-center text-lg font-medium`}>
              Charts
            </span>
          </Link>
        </div>
        <div
          className={`p-4 transition duration-300 ${isActive("/visualization")
            ? "border-b-4 border-green-600"
            : "hover:border-b-4 border-green-600 cursor-pointer"
            }`}
        >
          <Link href="/visualization">
            <span className={`flex items-center text-lg font-medium`}>
              Visualization
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
