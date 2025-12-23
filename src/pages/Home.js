import React, { useEffect, useRef } from 'react';
import '../styles/global.css';
import '../styles/home.css';

const Home = () => {
    const skills = [
        { name: "Java", icon: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" },
        { name: "HTML", icon: "https://img.icons8.com/color/48/html-5--v1.png" },
        { name: "CSS", icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-cascading-style-sheets-language-used-for-describing-the-presentation-of-a-document-logo-color-tal-revivo.png" },
        { name: "JavaScript", icon: "https://img.icons8.com/color/48/javascript--v1.png" },
        { name: "MySQL", icon: "https://img.icons8.com/color/48/mysql-logo.png" },
        { name: "Linux", icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-linux-a-family-of-open-source-unix-like-operating-systems-based-on-the-linux-kernel-logo-color-tal-revivo.png" },
        { name: "React.js", icon: "https://img.icons8.com/office/40/react.png" },
        { name: "Node.js", icon: "https://img.icons8.com/nolan/64/node-js.png" },
        { name: "Microsoft Office", icon: "https://img.icons8.com/fluency/48/microsoft-office-2019.png" }
    ];

    const cardRefs = useRef([]);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    if (entry.boundingClientRect.top > 0) {
                        entry.target.classList.remove('in-view');
                    }
                }
            });
        }, observerOptions);

        cardRefs.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="home-page">
            <h1 className="summary-title">Summary</h1>

            <div className="about-summary-wrapper">
                <div className="about-summary" ref={(el) => cardRefs.current[skills.length] = el}>
                    <h1>About Me</h1>
                    <p>
                        As a motivated and reliable individual, I combine strong <b>problem-solving skills</b> with a
                        <b>team-oriented mindset</b>. I possess excellent <b>interpersonal and communication skills</b>
                        developed through diverse roles, including my time as a <b>Tutor</b>.
                        I am eager to apply my technical expertise in a professional environment where I can add value
                        through hard work, dedication, and a continuous willingness to learn.
                    </p>
                </div>
            </div>

            <h1 className="skills-title">Technical Arsenal</h1>

            <div className="skills-summary">
                {skills.map((skill, i) => (
                    <div
                        className="skill-item"
                        key={i}
                        ref={(el) => (cardRefs.current[i] = el)}
                    >
                        <div className="skill-content">
                            <img src={skill.icon} alt={skill.name} />
                            <span>{skill.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;