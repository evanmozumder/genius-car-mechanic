import React from "react";
import "./Expert.css";

const Expert = ({ expert }) => {
  const { name, price, img, time } = expert;
  return (
    <div className="col-lg-4 expert">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h5 className="text-danger">{time}</h5>
    </div>
  );
};

export default Expert;
