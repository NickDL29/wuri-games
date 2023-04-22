import React from 'react'
import header1 from "../../Assets/header1.png";
import glitch_emptyland from "../../Assets/glitch_emptyland.gif";
import CreateGame from '../createGame/createGame'
import './Hero2.0.scss';

const Hero2 = () => {
  return (
    <div className='hero2-container'>
        <div className="hero-left-container">
            <CreateGame/>
        </div>
        <div className="hero-right-container">
            <img src={header1} alt="" />
            <img src={glitch_emptyland} alt="" />
        </div>
    </div>
  )
}

export default Hero2