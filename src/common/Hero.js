import React from 'react';
import '../styles/hero.css';
import '../styles/global.css';

const Hero = () => {
    const titleText = "Welcome to\nMy Portfolio";
    const subtitleText = "Discover my projects, skills, and experience as a Frontend Developer.";

    const renderAnimatedText = (text) => {
        return text.split('').map((char, index) => {
            if (char === '\n') {
                return <br key={index} />;
            }
            return (
                <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
                    {char === ' ' ? '\u00A0' : char}
                </span>
            );
        });
    };

    return (
        <div className="hero">
            <div className="bg3"></div>
            <div className="bg4"></div>

            <div className="welcome-section">
                <h1>{renderAnimatedText(titleText)}</h1>
                <p className="fade-in-text">{subtitleText}</p>
            </div>
        </div>
    );
}

export default Hero;