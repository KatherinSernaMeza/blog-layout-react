import React from "react";

export const Theme = (props) => {
  return (
    <div className="info-container">
      <img className="img-info" src={props.img} alt="" />
      <div>
        <h3 className="title-column">{props.title}</h3>
        <p className="description-theme">{props.description}</p>
      </div>
    </div>
  );
};

export default Theme;
