import React from "react";

export const ColorFullMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color: color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};
