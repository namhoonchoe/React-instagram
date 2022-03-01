import React, { useState } from "react";
import { Tooltip, ScaleFade, useOutsideClick } from "@chakra-ui/react";
import { SearchIcon, CloseIcon } from "./SvgIcons";

export default function SearchInput() {
  const [clicked, setClicked] = useState<boolean>(false);
  const [keyword, setKeyword] = useState("");

  const openSearchBox = () => {
    setClicked(true);
  };

  const closeSearchBox = () => {
    setClicked(false);
  };

  const onChange = (e: any) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    setKeyword("");
  };

  return (
    <div className="center__container--row justify-start bg-slate-300 rounded-md w-1/4 h-8 px-1">
      {clicked ? (
        <>
          <form onSubmit={onSubmit} className="w-full">
            <ScaleFade in={clicked}>
              <div className="flex flex-row justify-between items-center">
                <input
                  value={keyword}
                  onChange={onChange}
                  placeholder="Search"
                  className="bg-slate-300 w-2/3 pl-4"
                />
                <div onClick={() => closeSearchBox()} className="w-1/6 flex items-center justify-center">
                  <CloseIcon />
                </div>
              </div>
            </ScaleFade>
          </form>
        </>
      ) : (
        <>
          <div onClick={() => openSearchBox()} className="w-1/6">
            <SearchIcon />
          </div>
          <p>Search</p>
        </>
      )}
    </div>
  );
}
