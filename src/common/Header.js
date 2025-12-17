import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, User, Briefcase, Mail } from "lucide-react";
import '../styles/header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navLinks = [
        { name: "Home", path: "/", icon: <Home size={28} /> },
        { name: "About", path: "/About", icon: <User size={28} /> },
        { name: "Projects", path: "/Projects", icon: <Briefcase size={28} /> },
        { name: "Contact", path: "/Contact", icon: <Mail size={28} /> },
    ];

    return (
        <div className="led-border-wrapper">
            <header className="header">
                <div className="my-name">
                    <h1>
                        {"Letago Kekana".split("").map((char, i) => (
                            <span key={i} style={{ "--i": i }}>
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </h1>
                </div>

                <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <nav className={`menu ${isOpen ? "active" : ""}`}>
                    <ul>
                        {navLinks.map((link, i) => (
                            <li key={i} style={{ "--i": i }}>
                                <Link to={link.path} onClick={closeMenu}>
                                    <span className="mobile-icon">{link.icon}</span>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                
                <div className="led-line-rgb"></div>
            </header>
        </div>
    );
};

export default Header;