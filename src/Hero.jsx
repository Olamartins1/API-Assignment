import React from "react";
import "./HeroStyle.css";
import men2 from "../public/men2.png";

const Hero = () => {
  return (
    <div className="Hero_Body">
      <div className="Hero_Wrapper">
        <article className="Hero_Left">
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            possimus quam perspiciatis saepe nam. Quas deserunt saepe ipsum
            omnis corrupti sed. Veniam ea nobis reiciendis assumenda pariatur
            facilis totam ducimus.
          </h2>
        </article>
        <div className="Hero_Right">
          <button className="Button"></button>
          <div className="Product_Display">
            <img src={men2} alt="ProductImage" className="men" />
          </div>
          <button className="Button"></button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
