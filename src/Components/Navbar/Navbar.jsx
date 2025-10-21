import React, { useRef, useState } from "react";
import "./Navbar.css";
// import logo from "../../assets/logo-1.png";
import underline_img from "../../assets/wave.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0"

  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px"

  }

  return (
    <div className="navbar">
      {/* <img
        src={logo}
        alt="logo"
        style={{ height: "80px", width: "100px", borderRadius: "50%" }}
      /> */}
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />

      <ul ref={menuRef} className="nav-menu">
       <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? (
            <img
              src={underline_img}
              alt=""
              style={{ width: "100px", height: "15px" }}
            />
          ) : (
            <></>
          )}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? (
            <img
              src={underline_img}
              alt=""
              style={{ width: "100px", height: "15px" }}
            />
          ) : (
            <></>
          )}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? (
            <img
              src={underline_img}
              alt=""
              style={{ width: "100px", height: "15px" }}
            />
          ) : (
            <></>
          )}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" ? (
            <img
              src={underline_img}
              alt=""
              style={{ width: "100px", height: "15px" }}
            />
          ) : (
            <></>
          )}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact Me</p>
          </AnchorLink>
          {menu === "contact" ? (
            <img
              src={underline_img}
              alt=""
              style={{ width: "100px", height: "15px" }}
            />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
    </div>
  );
};

export default Navbar;
