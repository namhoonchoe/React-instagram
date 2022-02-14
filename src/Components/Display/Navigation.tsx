import React from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  SendIcon,
  AddICon,
  ExploreIcon,
  ProfileIcon,
} from "./SvgIcons";

export default function Navigation() {
  return (
    <div className="center__container--row bg-white">
      <div className="w-1/6 mr-2">
        <Link to="/">
          <HomeIcon />
        </Link>
      </div>
      <div className="w-1/6 mr-2">
        <Link to="message">
          <SendIcon />
        </Link>
      </div>
      <div className="w-1/6 mr-2">
        <Link to="shops">
          <AddICon />
        </Link>
      </div>
      <div className="w-1/6 mr-2">
        <Link to="explore">
          <ExploreIcon />
        </Link>
      </div>
      <div className="w-1/6 mr-2">
        <Link to="profile">
          <ProfileIcon />
        </Link>
      </div>
    </div>
  );
}
