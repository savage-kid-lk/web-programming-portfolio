import React from "react";
import "../styles/projects.css";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="construction-container">
        {/* Lottie Animation */}
        <div className="lottie-wrapper">
          <DotLottieReact
            src="https://lottie.host/174d0788-e1b4-461c-a841-6ae7127d3db5/n9KFRS5iMS.lottie"
            loop
            autoplay
          />
        </div>

        {/* Text Content */}
        <h1 className="projects-title">Projects</h1>
        <p className="construction-msg">This page is still under construction</p>
      </div>
    </div>
  );
};

export default Projects;