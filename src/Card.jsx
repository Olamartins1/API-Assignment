import React from "react";
import "./Card.css";
// import img from "../../assets/Nike.png"

const Card = ({ item }) => {
  return (
    <div className="Card_cont">
      <div
        className="image
      "
      >
        <img src={item.image} alt="" />
      </div>

      <p>{item.title}</p>
    </div>
  );
};

export default Card;
