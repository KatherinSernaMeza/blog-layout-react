import React from "react";

export const ItemNavigate = (props) => {
  return (
    <a href="/" className="item-menu">
      {props.item}
    </a>
  );
};

export default ItemNavigate;
