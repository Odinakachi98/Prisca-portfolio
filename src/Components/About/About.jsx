import React from 'react'
import './About.css'
import theme from '../../assets/themepattern.png'
import profile from '../../assets/profile.png'


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
        <p>I am an experienced Frontend Developer with over 3 years of experience in the field. i have had the privilege to collaborate with other frontend developers</p>
        <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication i bring to each project </p>
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
        <h1>3</h1>
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