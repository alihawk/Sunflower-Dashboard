import Head from "next/head";
import React, { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import LowerTopBar from "../lowerTopBar";
import { useRouter } from "next/router";

export default function BaseLayout({ children, title, footer }) {
  const [sideBar, setSideBar] = useState(false);
  const router = useRouter()

  return (
    <div className="flex flex-col h-full">
      <Head>
        <title>{title}</title>
        <link href="https://fonts.cdnfonts.com/css/dm-sans" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=DM Serif Display" rel="stylesheet"></link>
      </Head>
      <div className="flex w-full bg-lightWhite dark:bg-fields">
        <div
          className={`w-full m-10  pr-2 flex flex-col ${footer ? "justify-between" : ""
            }  ease-in-out bg-lightWhite dark:bg-fields relative duration-300 ${sideBar ? " md:translate-x-[200px] md:!w-[calc(100%-200px)] " : ""
            } ${router.pathname.includes("main") ? "!mt-0" : "mt-32"}`}
        >

          <div className="content-container flex-grow overflow-y-auto">{children}</div>

        </div>
      </div>
    </div>
  );
}