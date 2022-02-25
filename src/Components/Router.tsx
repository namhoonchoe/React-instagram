import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@Screens/Home";
import Explore from "@Screens/Explore";
import Login from "@Screens/Login";
import Profile from "@Screens/Profile";
import Header from "./Display/Header";
import Saved from "@Screens/Profile/Saved";
import Tagged from "@Screens/Profile/Tagged";
import Posts from "@Screens/Profile/Posts";
export default function AppRouter() {
  return (
    <Router>
      <div className="w-[99vw] flex flex-col justify-start items-center bg-cyan-200 relative ">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="explore" element={<Explore />} />
          <Route path="profile" element={<Profile />}>
            <Route path="" element={<Posts />} />
            <Route path="saved" element={<Saved />} />
            <Route path="tagged" element={<Tagged />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
