import React from "react";
import product from "../../../assets/data";
import "./style.scss";
const Home_Data = (props) => {
  const nameitem = props.product;
  return (
    <div className="Appetize-Container">
      <img className="image" src={nameitem.img} />
      <b className="text">{nameitem.name}</b>
    </div>
  );
};

export default Home_Data;
