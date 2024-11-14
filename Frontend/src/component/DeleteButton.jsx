"use client";
import { useState } from "react";
import React from "react";

export default function DeleteButton() {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  const [hover, setHover] = useState(false);

  // function onMouseAction(event: React.SyntheticEvent) {
  //     if (event.type == 'mouseover') {
  //         setHover(true);
  //     } else {
  //         setHover(false);
  //     }
  // }
  function onMouseAction(event) {
    if (event.type === "mouseover") {
      setHover(true);
    } else {
      setHover(false);
    }
  }

  return (
    <button
      className="button"
      onClick={handleClick}
      style={
        hover
          ? {
              border: "2px solid black",
              boxShadow: "5px 4px #472F05",
              backgroundColor: "#ff3333",
              cursor: "pointer",
            }
          : {
              border: "2px solid black",
              boxShadow: "5px 4px #472F05",
              backgroundColor: "#F3DDD1",
              cursor: "default",
            }
      }
      onMouseOver={(event) => onMouseAction(event)}
      onMouseOut={(event) => onMouseAction(event)}
    >
      <p>🗑️Delete</p>
    </button>
  );
}
