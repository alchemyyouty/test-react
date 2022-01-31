import React from "react";

const ColorFullMessage = (props) => {
  console.log(props);
  const contentStyle = {
    color: props.color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{props.message}</p>;
};

export default ColorFullMessage;
