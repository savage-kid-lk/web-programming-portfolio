import React, { useEffect, useRef } from "react";
import "../styles/projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import eggStockMobille from "../media/EggStockmobile.jpg";
import eggStockDesktop from "../media/EggStockDesktop.png";
import eVotingMobile from "../media/EVotingMobile.png";
import eVotingDesktop from "../media/EVotingDesktop.png";

const projectData = [
    {
        id: 1,
        title: "Egg Stock Control App",
        description: "A comprehensive inventory and sales management system for egg distribution businesses. Features include real-time stock tracking, dynamic pricing with bulk discounts, and secure staff access control via Google and Phone authentication.",
        techStack: ["React", "Firebase", "CSS3", "PWA"],
        mobileImg: eggStockMobille,
        desktopImg: eggStockDesktop,
        liveLink: "",
        githubLink: "https://github.com/savage-kid-lk/EggBusinessManagement"
    },
    {
        id: 2,
        title: "E-Voting System",
        description: "A secure electronic voting platform designed for local elections. This system ensures voter anonymity while maintaining a transparent and immutable audit trail using modern web security practices.",
        techStack: ["Java", "Node.js", "Express", "Railway"],
        mobileImg: eVotingMobile,
        desktopImg: eVotingDesktop,
        liveLink: "",
        githubLink: "https://github.com/savage-kid-lk/electronicvoting"
    }
];

const Projects = () => {
    const observerRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                } else {
                    if (entry.boundingClientRect.top > 0) {
                        entry.target.classList.remove("in-view");
                    }
                }
            });
        }, { threshold: 0.2, rootMargin: "0px 0px -100px 0px" });

        observerRefs.current.forEach(ref => { if(ref) observer.observe(ref); });
        return () => observer.disconnect();
    }, []);

    return (
        <div className="projects-page">
            <div className="galaxy-overlay"></div>
            
            <header className="projects-header anim-target" ref={el => observerRefs.current[projectData.length] = el}>
                <h1 className="main-title">My <span className="highlight">Work</span></h1>
                <p className="subtitle">A selection of recent projects and experiments.</p>
            </header>

            <div className="projects-container">
                {projectData.map((project, index) => (
                    <section 
                        key={project.id} 
                        className={`project-section anim-target ${index % 2 === 0 ? 'left' : 'right'}`}
                        ref={el => observerRefs.current[index] = el}
                    >
                        <div className="project-visuals">
                            <div className="mobile-frame">
                                <img src={project.mobileImg} alt="mobile" />
                            </div>
                            <div className="desktop-frame">
                                <img src={project.desktopImg} alt="desktop" />
                            </div>
                        </div>

                        <div className="project-content">
                            <h2 className="project-name">{project.title}</h2>
                            <div className="tech-tags">
                                {project.techStack.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <p className="project-desc">{project.description}</p>
                            
                            <div className="project-links">
                                {project.liveLink && (
                                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn btn-live">
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                )}
                                
                                {project.githubLink && (
                                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn btn-code">
                                        <FaGithub /> Source Code
                                    </a>
                                )}
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default Projects;