import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@Screens/Home";
import Feed from "@Screens/Explore";
import Login from "@Screens/Login";
import Message from "@Screens/Message";
import Profile from "@Screens/Profile";
import Shops from "@Screens/Shops";
import Header from "./Display/Header";
import Saved from "@Screens/Profile/Saved";
import Tagged from "@Screens/Profile/Tagged";
import Posts from "@Screens/Profile/Posts";
export default function AppRouter() {
  return (
    <Router>
      <div className="w-screen flex flex-col justify-start items-center bg-cyan-200 relative">
          <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="explore" element={<Feed />} />
          <Route path="message" element={<Message />} />
          <Route path="profile" element={<Profile />}>
            <Route path="" element={<Posts />} />
            <Route path="saved" element={<Saved />} />
            <Route path="tagged" element={<Tagged />} />
          </Route>
          <Route path="shops" element={<Shops />} />
        </Routes>
      </div>
    </Router>
  );
}
