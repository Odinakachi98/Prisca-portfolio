import React, { useRef, useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef();

    const openMenu = () => {
        if (menuRef.current) {
            menuRef.current.style.right = "0";
        }
        setIsMenuOpen(true);
    }

    const closeMenu = () => {
        if (menuRef.current) {
            menuRef.current.style.right = "-350px";
        }
        setIsMenuOpen(false);
    }

    const handleMenuClick = (menuItem) => {
        setMenu(menuItem);
        closeMenu();
    }

    const menuItems = [
        { id: "home", label: "Home", href: "#home" },
        { id: "about", label: "About Me", href: "#about" },
        { id: "services", label: "Services", href: "#services" },
        { id: "work", label: "Portfolio", href: "#work" },
        { id: "contact", label: "Contact Me", href: "#contact" }
    ];

    return (
        <div className="navbar">
            <div className="nav-mob-open" onClick={openMenu}>☰</div>

            {isMenuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}

            <ul ref={menuRef} className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <div className="nav-mob-close" onClick={closeMenu}>✕</div>
                
                {menuItems.map(item => (
                    <li key={item.id}>
                        <AnchorLink className="anchor-link" offset={50} href={item.href}>
                            <p onClick={() => handleMenuClick(item.id)}>{item.label}</p>
                        </AnchorLink>
                        {menu === item.id && <div className="nav-underline"></div>}
                    </li>
                ))}
            </ul>

            <div className="nav-connect">
                <AnchorLink className="anchor-link" offset={50} href="#contact">
                    Connect With Me
                </AnchorLink>
            </div>
        </div>
    );
};

export default Navbar;