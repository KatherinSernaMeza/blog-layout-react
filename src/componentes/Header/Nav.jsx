import React from "react";
import ItemNavigate from "./ItemNavigate.jsx";
import { useState } from "react";

export const Nav = () => {
  const [itemsNavigate, setData] = useState([
    { item: "Harper" },
    { item: "Second" },
    { item: "Third" },
    { item: "Fourth" },
    { item: "Fifth" },
  ]);
  return (
    <nav className="contenedor-span-menu">
      {itemsNavigate.map((itemNav, index) => {
        return <ItemNavigate key={index} item={itemNav.item} />;
      })}
    </nav>
  );
};

export default Nav;
