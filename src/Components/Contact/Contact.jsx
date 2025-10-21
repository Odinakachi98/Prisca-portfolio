import React, { useState } from 'react';
import './Contact.css';
import theme from '../../assets/themepattern.png';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "3a0f9eee-ebdf-4445-a4cc-2c2261f8192d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(`Error: ${data.message}`);
    }
  };

  return (
    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Contact Me</h1>
        <img src={theme} alt="theme pattern" style={{ width: "100px", height: "100px"}} />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>I'm currently available to build new projects, so feel free to message me about anything you want me to work on. You can contact me:</p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail" /> 
              <p>priscalinus706@gmail.com</p>
            </div>

            <div className="contact-detail">
              <img src={call_icon} alt="call" /> 
              <p>+234-814-776-3119</p> 
            </div>

            <div className="contact-detail">
              <img src={location_icon} alt="location" /> 
              <p>Lagos State, Nigeria.</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name="name" required />

          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' required />

          <label htmlFor="">Talk To Me</label>
          <textarea name="message" rows="10" placeholder='Enter your message' required></textarea>
          
          <button type='submit' className='contact-send'>Send</button>
          <span>{result}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
