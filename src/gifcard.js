import React from "react";

export default function Gifcard(props) {
  return (
    <div>
      <img className="animated-gif" src={props.url} alt="gifs"></img>
    </div>
  );
}
