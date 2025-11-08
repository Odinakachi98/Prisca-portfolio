import React from 'react'
import './About.css'
import theme from '../../assets/themepattern.png'
import profile from '../../assets/img_01.png'


const About = () => {
  return (
    <div id='about' className='about'>
     <div className="about-title">
      <h1>About Me</h1>
      <img src={theme} alt="" style={{ width: "100px", height: "100px"}}/>
     </div>
     <div className="about-sections">
      
      <div className="about-left">
        <img src={profile} alt="" style={{height: "300px", width: "300px"}}/>
      </div>

      <div className="about-right">
       <div className="about-para">
        <p>I am an passionate Frontend Developer with a works with details and a love for creating user experience with a clean code and beautiful design</p>
        <p>I'm also a lover of knowledge,novelty and a good food. so, when I'm not coding, I'm reading, researching and experimenting in the kitchen. </p>
       </div>

       <div className="about-skills">
        <div className="about-skill"><p>HTML & CSS</p> <hr  style={{width: "50%"}}/></div>
        <div className="about-skill"><p>React Js</p> <hr  style={{width: "70%"}}/></div>
        <div className="about-skill"><p>Javascript</p> <hr  style={{width: "60%"}}/></div>  
       </div>
      </div>
     </div>

     <div className="about-achievements">

      <div className="about-achievement">
        <h1>4</h1>
        <p>YEARS OF EXPERIENCE</p>
      </div>
      <hr />

      <div className="about-achievement">
        <h1>10+</h1>
        <p>PROJECTS COMPLETED</p>
      </div>
      <hr />

      <div className="about-achievement">
        <h1>2</h1>
        <p>HAPPY CLIENTS</p>
      </div>

     </div>
    </div>
  )
}

export default About