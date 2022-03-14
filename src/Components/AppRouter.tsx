import React from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Header from "./Display/Header";
import Home from "@Screens/Home";
import Explore from "@Screens/Explore";
import Collection from "@Screens/Collection"
import Login from "@Screens/Login";
import Detail from "@Screens/Detail";
import Search from "@Screens/Search";
import SearchPhotos from "@Screens/Search/SearchPresenter/SearchPhotos";
import SearchCollection from "@Screens/Search/SearchPresenter/SearchCollection";
import Profile from "@Screens/Profile";
import ProfilePhotos from "@Screens/Profile/ProfilePhotos";
import ProfileCollections from "@Screens/Profile/ProfileCollections";
import ProfileLikes from "@Screens/Profile/ProfileLikes";

import { redirectionState } from "@RecoilStore/Atoms";
import { useRecoilValue } from "recoil";

export default function AppRouter() {
  const redirection = useRecoilValue(redirectionState);
  let location = useLocation();

  let state = location.state as { backgroundLocation?: Location };

  return (
    <>
      <div className="w-[99vw] flex flex-col justify-start items-center bg-cyan-200 relative ">
        <Header />
        <Routes location={state?.backgroundLocation || location}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="explore" element={<Explore />} />
          <Route path="collection/:id" element={<Collection />} />
          <Route path="profile/:username" element={<Profile />}>
            <Route path="" element={<ProfilePhotos />} />
            <Route path="collections" element={<ProfileCollections />} />
            <Route path="likes" element={<ProfileLikes />} />
          </Route>
          <Route path="search" element={<Search />}>
            <Route path="" element={<SearchPhotos />} />
            <Route path="collection" element={<SearchCollection />} />
          </Route>
        </Routes>
        {redirection && <Navigate to="search" />}
      </div>
      {state?.backgroundLocation && (
        <Routes>
          <Route path="detail/:id" element={<Detail />} />
        </Routes>
      )}
    </>
  );
}
