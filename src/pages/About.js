import React, { useEffect, useRef } from "react";
import "../styles/about.css";
import profilePic from "../media/profile-picture.jpg";

const About = () => {
    const experiences = [
        {
            icon: "https://ienabler.tut.ac.za/itsimages/InsImg.gif",
            title: "Tutor – Tshwane University of Technology",
            date: "Aug 2025 – Oct 2025",
            tasks: ["Tutored students in CS", "Assisted in labs", "Explained coding logic"],
            animIcon: "https://animatedicons.co/get-icon?name=CLP&style=minimalistic&token=443f928c-fed5-4d77-8d8a-debd2b9c67a2"
        },
        {
            icon: "https://ienabler.tut.ac.za/itsimages/InsImg.gif",
            title: "Registration Student Assistant – TUT",
            date: "Jan 2025 – Feb 2025",
            tasks: ["Manual & online registration", "Queue management", "Document verification"],
            animIcon: "https://animatedicons.co/get-icon?name=Register&style=minimalistic&token=443f928c-fed5-4d77-8d8a-debd2b9c67a2"
        },
        {
            icon: "https://ienabler.tut.ac.za/itsimages/InsImg.gif",
            title: "Computer Science Mentor – TUT",
            date: "Feb 2024 – Nov 2024",
            tasks: ["Mentored 1st years", "Academic support", "Studython coordination"],
            animIcon: "https://animatedicons.co/get-icon?name=Classroom&style=minimalistic&token=e3e4aedc-82e9-4ec3-8751-ecde2860c32f"
        },
        {
            icon: "https://tse3.mm.bing.net/th/id/OIP.H2l9T06XgugPWUS5xWG1VwHaGL?rs=1&pid=ImgDetMain&o=7&rm=3",
            title: "General Worker – Meatrite",
            date: "Feb 2022 – Feb 2023",
            tasks: ["Machinery operation", "Product classification", "Efficiency under pressure"],
            animIcon: "https://animatedicons.co/get-icon?name=Staff&style=minimalistic&token=ae89d06d-f628-4b1b-a043-ad9291637752"
        }
    ];

    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                } else {
                    entry.target.classList.remove("in-view");
                }
            });
        }, { threshold: 0.3, rootMargin: "-10% 0px -10% 0px" });

        cardRefs.current.forEach(ref => { if (ref) observer.observe(ref); });

        const script = document.createElement("script");
        script.src = "https://animatedicons.co/scripts/embed-animated-icons.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            observer.disconnect();
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="about-page">
            <div className="galaxy-overlay"></div>

            <section className="about-hero anim-target" ref={el => cardRefs.current[experiences.length] = el}>
                <div className="about-heading">
                    <img src={profilePic} className="about-hero-icon" alt="Profile" />
                    <h1 className="about-title">About <br /> Me</h1>
                </div>
                <h1>About Me</h1>
                <p>
                    I am a passionate <b>Computer Science Graduate</b> at <b>Tshwane University of Technology</b>,
                    where I have consistently excelled with distinctions in technical cores like <b>Database Principles,
                        Advanced Object-Oriented Programming, and Operating Systems</b>. Beyond code, I am a proactive leader,
                    serving as the <b>House Committee Chairperson</b> and a <b>Student Mentor</b>—roles that have sharpened
                    my <b>Leadership</b> and organizational abilities. My experience as a <b>Tutor</b> and <b>Peer Facilitator </b>
                     demonstrates my ability to break down complex logic, while my practical work in <b>Web and Mobile Computing</b>
                    fuels my drive to build innovative solutions.
                </p>
                <p>
                    As a motivated and reliable individual, I combine these technical strengths with a <b>team-oriented mindset</b>
                    and strong <b>problem-solving skills</b>. My diverse background, including time as a <b>Registration Assistant</b>,
                    has equipped me with excellent interpersonal and communication skills. I am eager to apply my expertise
                    in a professional environment where I can add value through hard work, dedication, and a continuous
                    willingness to learn.
                </p>
            </section>

            <section className="experience-section">
                <h2 className="section-heading">Professional Experience</h2>
                {experiences.map((exp, i) => (
                    <div className="experience-card anim-target" key={i} ref={el => cardRefs.current[i] = el}>
                        <div className="card-border-line"></div>
                        <img src={exp.icon} className="card-icon" alt="icon" />
                        <div className="exp-content">
                            <h3>{exp.title}</h3>
                            <span className="exp-date">{exp.date}</span>
                            <ul>{exp.tasks.map((t, j) => <li key={j}>{t}</li>)}</ul>
                        </div>
                        <div className="exp-animated-icon">
                            <animated-icons src={exp.animIcon} trigger="loop" height="150" width="150" />
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default About;