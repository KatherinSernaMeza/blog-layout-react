import React from "react";

export const ItemsLinks = (props) => {
  return (
    <li>
      <a href="/" className="description-theme-link">
        {props.item}
      </a>
      <hr />
    </li>
  );
};

export default ItemsLinks;
