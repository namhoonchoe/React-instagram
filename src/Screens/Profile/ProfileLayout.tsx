import React from "react";
import ProfileHeader from "./ProfileHeader";
import {
  CollectionIcon,
  PhotoIcon,
  LikeIconBorder,
  LikeIconFilled,
} from "@Components/Display/SvgIcons";
import { Outlet, Link, useMatch } from "react-router-dom";

export default function ProfileLayout() {
  const profilePhotos = useMatch("/profile/:username");
  const profileCollections = useMatch("/profile/:username/collections");
  const profileLikes = useMatch("/profile/:username/likes");

  return (
    <section className="page__container flex-col border-cyan-400">
      <ProfileHeader />
      <section className="flex flex-row justify-start items-center w-full h-14 border-2 relative">
        <Link to="">
          {profilePhotos === null ? (
            <div className="flex justify-start items-center pl-2 ">
              <PhotoIcon width={"32px"} height={"32px"} fill={"#9ca3af"} />
              <p className="ml-1 text-slate-400	font-semibold">Photos</p>
            </div>
          ) : (
            <div className="flex justify-start items-center pl-2  ">
              <PhotoIcon width={"32px"} height={"32px"} />
              <p className="ml-1 font-semibold">Photos</p>
            </div>
          )}
        </Link>
        <Link to="likes">
          {profileLikes === null ? (
            <div className="flex justify-start items-center pl-2 ">
              <LikeIconBorder width={"32px"} height={"32px"} fill={"#9ca3af"} />
              <p className="ml-1 text-slate-400	font-semibold">Likes</p>
            </div>
          ) : (
            <div className="flex justify-start items-center pl-2  ">
              <LikeIconFilled width={"32px"} height={"32px"} />
              <p className="ml-1 font-semibold">Likes</p>
            </div>
          )}
        </Link>
        <Link to="collections">
          {profileCollections === null ? (
            <div className="flex justify-start items-center pl-2 ">
              <CollectionIcon width={"32px"} height={"32px"} fill={"#9ca3af"} />
              <p className="ml-1 text-slate-400	font-semibold">Collections</p>
            </div>
          ) : (
            <div className="flex justify-start items-center pl-2  ">
              <CollectionIcon width={"32px"} height={"32px"} />
              <p className="ml-1 font-semibold">Collections</p>
            </div>
          )}
        </Link>
      </section>
      <section className="w-full h-screen border-2">
        <Outlet />
      </section>
    </section>
  );
}
