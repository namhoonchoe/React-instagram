import React, { useEffect } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { redirectionState } from "@RecoilStore/Atoms";
import SearchPresenter from "./SearchPresenter";

export default function SearchContainer() {
  const redirection = useSetRecoilState(redirectionState)
  const check = useRecoilValue(redirectionState)
  useEffect(() => {
    let mounted = true
    
    if(mounted){
      redirection(false)
      console.log(check)
    }
    
    return () => {
      mounted = false
    }
  }, [])
  
  
  return <SearchPresenter />;
}
