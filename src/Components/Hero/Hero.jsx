import React from 'react'
import './Hero.css';
import picture from '../../assets/me.jpg';
import resumePDF from '../../assets/Prisca - Frontend Developer Resume - Google Docs.pdf'; 
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={picture} alt="pic" style={{height: "300px", width: "300px",}} />
            <h2><span>I'm Prisca Odinakachi, </span>frontend developer based in Nigeria</h2>
            <p>Prisca, translating ideas into digital experience. crafting the web, creating with code.</p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className="anchor-link" offset="50" href='#contact'>Connect with me</AnchorLink>
                </div>
                <div className="hero-resume">
                    <a 
                        href={resumePDF} 
                        download="Prisca_Odinakachi_Resume.pdf"
                        className="resume-link"
                    >
                        My resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero