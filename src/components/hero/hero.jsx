import React, { useState } from "react";
import "./hero.scss";
import header1 from "../../Assets/header1.png";
import glitch_emptyland from "../../Assets/glitch_emptyland.gif";
import Hero2 from "../Hero.20/Hero2";

const Hero = () => {
  const [showHero2, setshowHero2] = useState(false);

  const handleHero2Click = () => {
    console.log("Create Now clicked");
    setshowHero2(true);
  };

  return (
    <>
      {showHero2 ? (
        <Hero2/>
      ) : (
        <div className="hero-container">
          <div className="hero-left-back"></div>
          <div className="hero-left-container">
            <div className="hero-title">
              <h1>Wuri.</h1>
              <div className="inner-back"></div>
            </div>
            <div className="hero-tag">
              <p>Unleash Your Inner Game Developer</p>
            </div>
            <div>
              <p onClick={handleHero2Click} >Create Now</p>
            </div>
          </div>
          <div className="hero-right-container">
            <img src={header1} alt="" />
            <img src={glitch_emptyland} alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
