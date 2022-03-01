import React from "react";
import Navigation from "./Navigation";
import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <div className="w-full h-16 bg-white border-b border-b-slate-300 flex justify-center items-center fixed top-0 z-10">
      <div className=" w-[944px] h-full flex justify-center items-center  relative">
        <p className="font-medium text-xl absolute left-0">Splashgram</p>
        <SearchInput/>
        <div className="absolute right-0">
          <Navigation />
        </div>
      </div>
    </div>
  );
}
