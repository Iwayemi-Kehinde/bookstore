import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import MyFooter from "./components/MyFooter";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <MyFooter />
    </>
  );
};

export default App;
