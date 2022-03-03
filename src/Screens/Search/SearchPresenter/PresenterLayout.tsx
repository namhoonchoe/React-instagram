import React from "react";

import { Outlet } from "react-router-dom";
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  HistoryIcon,
  CollectionIcon,
  PhotoIcon,
  TuneIcon,
} from "@Components/Display/SvgIcons";
import { searchKeyWordState } from "@RecoilStore/Atoms";
import { useRecoilValue } from "recoil";
import { usePathTypeCheck } from "@Hooks/usePathTypeCheck";

export default function PresenterLayout() {
  const searchKeyword = useRecoilValue(searchKeyWordState);
  const pathType = usePathTypeCheck();
  return (
    <>
      <section className="page__container flex-col ">
        <section className="flex flex-row justify-start items-center border-green-400 border-2 w-full h-32">
          <p className="font-semibold	 text-4xl text-slate-800 capitalize">
            {searchKeyword}
          </p>
        </section>
        <div className="flex flex-row justify-start items-center w-full h-14 border-2  relative">
          <Link to="">
            <div className="flex justify-start items-center pl-2 ">
              <PhotoIcon width={"32px"} height={"32px"} fill={"#9ca3af"} />
              <p className="ml-1 text-slate-400	">Photos</p>
            </div>
          </Link>
          <Link to="collection">
            <div className="flex justify-start items-center pl-2 ">
              <CollectionIcon width={"32px"} height={"32px"} fill={"#9ca3af"} />
              <p className="ml-1 text-slate-400	">Collections</p>
            </div>
          </Link>
          {pathType !== "collection" && (
            <div className="absolute right-3">
              <TuneIcon width={"32px"} height={"32px"} />
            </div>
          )}
        </div>
        <section className="w-full h-screen border-2">
          <Outlet />
        </section>
      </section>
    </>
  );
}
