import React from "react";
import Nav from "./Nav.jsx";

const Header = () => {
  return (
    <div className="menu">
      <div className="container contenedor-menu row justify-center">
        <header id="header" className=" row w-full justify-between ">
          <h1 className="contenedor-span-menu-title">
            <p className="contenedor-menu-title">minimaxing</p>
          </h1>
          <Nav />
        </header>
      </div>
    </div>
  );
};

export default Header;
