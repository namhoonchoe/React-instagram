import React from "react";
import ProfileHeader from "./ProfileHeader";
import { Outlet, Link } from "react-router-dom";

export default function PresenterLayout() {
  return (
    <section className="page__container flex-col border-cyan-400">
      <ProfileHeader />
      <section className="w-full h-64 flex flex-row items-start justify-start">
        <Link to="">
          <p>Photos</p>
        </Link>
        <Link to="collections">
          <p>Collections</p>
        </Link>
        <Link to="likes">
          <p>liked</p>
        </Link>
      </section>
      <Outlet />
    </section>
  );
}
