import React, { useState } from "react";
import { Tooltip, ScaleFade, useOutsideClick } from "@chakra-ui/react";
import { useSetRecoilState, useRecoilState } from "recoil";
import { searchQueryState, redirectionState } from "@RecoilStore/Atoms";
import { SearchIcon, CloseIcon } from "./SvgIcons";
import { useLocation } from "react-router-dom";
export default function SearchInput() {
  const [clicked, setClicked] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");
  const [searchTerm, setSearchTerm] = useRecoilState(searchQueryState);
  const redirectionValue = useSetRecoilState(redirectionState);
  const path = useLocation().pathname;

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

  const needRedirection = () => {
    if (path.includes("search")) {
      redirectionValue(false);
    } else {
      redirectionValue(true);
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (keyword !== "") {
      setSearchTerm({ ...searchTerm, query: keyword });
      needRedirection();
      setKeyword("");
    } else {
      alert("enter search keyword");
    }
    closeSearchBox()
  };

  return (
    <div className="center__container--row justify-start bg-slate-300 rounded-md w-1/4 h-8 px-1">
      {clicked ? (
        <>
          <form onSubmit={onSubmit} className="w-full ">
            <ScaleFade in={clicked}>
              <div className="flex flex-row justify-between items-center 4 ">
                <input
                  value={keyword}
                  onChange={onChange}
                  placeholder="Search"
                  className="bg-slate-300 w-full pl-4 focus:outline-none	"
                />
                <div
                  className="w-1/6 flex items-center justify-center"
                  onClick={() => closeSearchBox()}
                >
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
