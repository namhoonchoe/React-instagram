import React from "react";
import Navigation from "./Navigation";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

export default function Header() {



  return (
    <div className="w-full h-16 bg-white border-b border-b-slate-300 flex justify-center items-center fixed top-0 z-10">
      <div className=" w-[944px] h-full flex justify-center items-center relative">
        <div className=" absolute left-0">
          <Link to="/">
            <p className="font-medium text-xl">Splashgram</p>
          </Link>
        </div>

        <SearchInput />
        <div className="absolute right-0">
          <Navigation />
        </div>
      </div>
    </div>
  );
}
