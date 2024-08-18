

import React from "react";
import MainPage from "./Component/MainPage";
import Landing from "./Component/Landing";
import Signup from "./Component/Signup";
import Login from "./Component/Login";
import { Route,Routes } from "react-router-dom";

const App = ()=>{
  return (
    <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/mainPage" element={<MainPage/>}/>
  </Routes>
  )
}

export default App;