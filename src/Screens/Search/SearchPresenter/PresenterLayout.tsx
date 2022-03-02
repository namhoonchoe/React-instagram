import React from "react";
import DrawerNavigation from "./DrawerNavigation";
import { Outlet } from "react-router-dom";
import { searchKeyWordState } from "@RecoilStore/Atoms";
import { useRecoilValue } from "recoil";



export default function PresenterLayout() {
  const searchKeyword =  useRecoilValue(searchKeyWordState)
  return (
    <>
      <section className="page__container flex-col ">
        <section className="flex flex-row justify-start items-center border-green-400 border-2 w-full h-24">
          <p className="font-semibold	 text-4xl text-slate-800		">{searchKeyword}</p>
        </section>
        <section className="w-full h-screen border-2 ">
          <Outlet />
        </section>
      </section>
      <div className="fixed right-3	 top-1/2 w-10 h-10">
        <DrawerNavigation />
      </div>
    </>
  );
}


 