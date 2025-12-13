import React, { useEffect, useRef } from "react";
import "../styles/about.css";
import profilePic from "../media/profile-picture.jpg";

const About = () => {
    const experiences = [
        {
            icon: "https://ienabler.tut.ac.za/itsimages/InsImg.gif",
            title: "Tutor – Tshwane University of Technology",
            date: "Aug 2025 – Oct 2025",
            tasks: [
                "Tutored students in Computer Science modules",
                "Assisted during night-study programming labs",
                "Helped students understand advanced coding logic"
            ],
            animatedIcon: {
                src: "https://animatedicons.co/get-icon?name=CLP&style=minimalistic&token=443f928c-fed5-4d77-8d8a-debd2b9c67a2",
                variationColors: { "group-1": "#000000", "group-2": "#000000", "background": "#FFFFFF" }
            }
        },
        {
            icon: "https://ienabler.tut.ac.za/itsimages/InsImg.gif",
            title: "Registration Student Assistant – TUT",
            date: "Jan 2025 – Feb 2025",
            tasks: [
                "Assisted students with manual & online registration",
                "Managed queues during peak registration periods",
                "Verified and printed registration documents"
            ],
            animatedIcon: {
                src: "https://animatedicons.co/get-icon?name=Register&style=minimalistic&token=443f928c-fed5-4d77-8d8a-debd2b9c67a2",
                variationColors: { "group-1": "#000000", "group-2": "#000000", "background": "#FFFFFF" }
            }
        },
        {
            icon: "https://ienabler.tut.ac.za/itsimages/InsImg.gif",
            title: "Computer Science Mentor – TUT",
            date: "Feb 2024 – Nov 2024",
            tasks: [
                "Mentored first-year students across ICT modules",
                "Provided academic and administrative support",
                "Helped coordinate the ICT Studython event"
            ],
            animatedIcon: {
                src: "https://animatedicons.co/get-icon?name=Classroom&style=minimalistic&token=e3e4aedc-82e9-4ec3-8751-ecde2860c32f",
                variationColors: { "group-1": "#000000", "group-2": "#000000", "background": "#FFFFFF" }
            }
        },
        {
            icon: "https://tse3.mm.bing.net/th/id/OIP.H2l9T06XgugPWUS5xWG1VwHaGL?rs=1&pid=ImgDetMain&o=7&rm=3",
            title: "General Worker – Meatrite, Modimolle",
            date: "Feb 2022 – Feb 2023",
            tasks: [
                "Operated food-processing machinery responsibly",
                "Sorted and verified product classifications",
                "Worked efficiently under strict conditions"
            ],
            animatedIcon: {
                src: "https://animatedicons.co/get-icon?name=Staff&style=minimalistic&token=ae89d06d-f628-4b1b-a043-ad9291637752",
                variationColors: { "group-1": "#000000", "group-2": "#000000", "background": "#FFFFFF" }
            }
        }
    ];

    const iconRefs = useRef([]);
    iconRefs.current = experiences.map((_, i) => iconRefs.current[i] ?? React.createRef());

    useEffect(() => {
        // Load the animated-icons script
        const script = document.createElement("script");
        script.src = "https://animatedicons.co/scripts/embed-animated-icons.js";
        script.async = true;
        document.body.appendChild(script);

        // Set attributes on each animated icon
        iconRefs.current.forEach((ref, i) => {
            if (ref.current) {
                ref.current.setAttribute(
                    "attributes",
                    JSON.stringify({
                        variationThumbColour: "#00ffff",
                        variationName: "Two Tone",
                        variationNumber: 2,
                        numberOfGroups: 2,
                        backgroundIsGroup: false,
                        strokeWidth: 1,
                        defaultColours: experiences[i].animatedIcon.variationColors
                    })
                );
            }
        });

        return () => document.body.removeChild(script);
    }, []);

    return (
        <div className="about-page">
            {/* HERO SECTION */}
            <section className="about-hero">
                <div className="about-heading">
                    <img src={profilePic} className="about-hero-icon" />
                    <h1 className="about-title">About <br /> Me</h1>
                </div>
                <p className="about-intro">
                    I am a passionate <b>Computer Science student</b> at Tshwane University of Technology.
                    I thrive in environments where innovation, logic, and creativity merge.
                    With strong communication, leadership, and mentoring abilities,
                    I excel at breaking down complex concepts and building smart solutions.
                </p>
            </section>

            {/* EXPERIENCE */}
            <section className="experience-section">
                <h2 className="section-heading">Professional Experience</h2>
                {experiences.map((exp, i) => (
                    <div className="experience-card" key={i}>
                        <img src={exp.icon} className="card-icon" />
                        <div className="exp-content">
                            <h3>{exp.title}</h3>
                            <span className="exp-date">{exp.date}</span>
                            <ul>
                                {exp.tasks.map((t, j) => <li key={j}>{t}</li>)}
                            </ul>
                        </div>
                        <div className="exp-animated-icon">
                            <animated-icons
                                ref={iconRefs.current[i]}
                                src={exp.animatedIcon.src}
                                trigger="loop"
                                height="200"
                                width="200"
                            />
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default About;
