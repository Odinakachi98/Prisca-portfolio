import React from 'react'
import "./Hero.css";
import picture from '../../assets/img_01.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={picture} alt="pic" style= {{height: "300px", width: "300px", borderRadius: "50%"}}/>
      <h1><span>I'm Prisca Odinakachi, </span>frontend developer based in Nigeria</h1>
      <p>I'm a frontend developer from Lagos, Nigeria with 3 years of experience</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink> </div>
            <div className="hero-resume">My resume</div>
        </div>
      
    </div>
  )
}

export default Hero
