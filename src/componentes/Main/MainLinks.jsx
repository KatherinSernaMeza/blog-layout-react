import React from "react";

export const MainLinks = (props) => {
  return (
    <>
      <li>
        <a href="/" className="description-theme-link">
          {props.link}
        </a>
      </li>
      <hr />
    </>
  );
};

export default MainLinks;
