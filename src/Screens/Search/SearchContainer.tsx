import React, { useEffect } from "react";
import { useSetRecoilState, useResetRecoilState } from "recoil";
import { redirectionState, searchQueryState } from "@RecoilStore/Atoms";
import SearchPresenter from "./SearchPresenter";

export default function SearchContainer() {
  const redirection = useSetRecoilState(redirectionState)
  useEffect(() => {
    let mounted = true
    
    if(mounted){
      redirection(false)
    }
    
    return () => {
      mounted = false
    }
  }, [redirection])
  
  
  return <SearchPresenter />;
}
