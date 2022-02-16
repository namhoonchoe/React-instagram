import React from "react";
import Navigation from "./Navigation";
import { SearchIcon } from "./SvgIcons";

export default function Header() {
  return (
    <div className="w-screen h-16 bg-white border-b border-b-slate-300 flex justify-center items-center sticky top-0 z-10">
      <div className=" w-[944px] h-full flex justify-center items-center  relative">
        <p className="font-medium text-xl absolute left-0">Instagram</p>
        <div className="center__container--row justify-start bg-slate-300 rounded-md w-1/4 h-8 px-1">
          <SearchIcon />
          <p>Search</p>
        </div>
        <div className="absolute right-0">
          <Navigation />
        </div>
      </div>
    </div>
  );
}
