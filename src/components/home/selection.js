import React from "react";

const Selection = ({ boxes }) => {
  return <div>{boxes.map((e) => e.node.title)}</div>;
};

export default Selection;
