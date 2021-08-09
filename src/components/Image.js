import React from "react";

export default function Image({ title, link }) {
  return (
    <>
      <div className="imgDiv">
        <h2 className="photoTitle">{title}</h2>
        <img className="image1" src={`${link}`} alt="" />
        <hr />
      </div>
    </>
  );
}
