import React from "react";
import AppContext from "./context";

export default (props) => {
  return (
    <div>
      <div
        className="roundel"
        style={{ backgroundColor: props.product.color }}
      />
      <div className="title">{props.product.name}</div>
      <div className="price">
        ${(props.product.pricePerUnit / 100).toFixed(2)}
      </div>
    </div>
  );
};
