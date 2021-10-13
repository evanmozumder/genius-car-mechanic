import React from "react";
import "./Service.css";

const Service = (props) => {
  const { name, price, time, description, img } = props.service;
  return (
    <div className="service">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <h2>Price: {price}</h2>
      <h2>{time}</h2>
      <p className="px-5">{description}</p>
    </div>
  );
};

export default Service;
