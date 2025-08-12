import React from "react";
import "./Hero.css";
import bannerImg from "../assets/banner1.jpg";   
     

function Hero() {
  return (
      <img className="man-img" src={bannerImg} alt="model" />
        );
}

export default Hero;
