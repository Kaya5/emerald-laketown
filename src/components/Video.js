import React from "react";

export default function Video(props) {
  return (
    <div className="videoBox">
      <video className="video" autoPlay loop muted>
        <source src={props.source} type="video/mp4" />
      </video>
      <p className="caption">{props.caption}</p>
    </div>
  );  
}
