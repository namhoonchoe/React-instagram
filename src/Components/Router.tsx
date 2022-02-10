import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@Screens/Home"
import Feed from "@Screens/Feed"
import Login from "@Screens/Login"
import Message from "@Screens/Message"
import Profile from "@Screens/Profile"
import Shops from "Screens/Shops"


export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="/Feed" element={<Feed/>}/>
        <Route path="/Message" element={<Message/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Shops" element={<Shops/>}/>
      </Routes>
    </Router>
  );
}
