import React from "react";
import "../styles/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { 
  faFacebook, 
  faInstagram, 
  faLinkedin 
} from "@fortawesome/free-brands-svg-icons";
// Import the Lottie component
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Contact = () => {
  const contacts = [
    { 
      type: "Email",
      value: "kekanaletago58@gmail.com",
      link: "mailto:kekanaletago58@gmail.com?subject=feedback",
      icon: faEnvelope,
      anim: "icon-float" 
    },
    { 
      type: "Cellphone",
      value: "076 282 8806",
      link: "tel:+27762828806",
      icon: faPhone,
      anim: "icon-shake" 
    },
    { 
      type: "Facebook",
      value: "Letago Kekana",
      link: "https://www.facebook.com/share/1DsK3QMihX/",
      icon: faFacebook,
      anim: "icon-bounce"
    },
    { 
      type: "Instagram",
      value: "savage-kid-lk",
      link: "https://www.instagram.com/savage-kid-lk/",
      icon: faInstagram,
      anim: "icon-pulse"
    },
    { 
      type: "LinkedIn",
      value: "Letago Kekana",
      link: "https://www.linkedin.com/in/letago-kekana-34087a279",
      icon: faLinkedin,
      anim: "icon-float" 
    }
  ];

  return (
    <div className="contact-page">
      <h2 className="contact-heading">CONTACT ME:</h2>

      <div className="contact-content">
        {/* Left Side: Contact Details */}
        <div className="contact-details">
          {contacts.map((c, i) => (
            <div className="contact-item" key={i}>
              <div className={`icon-container ${c.anim}`}>
                <FontAwesomeIcon icon={c.icon} size="2x" />
              </div>
              <div className="text-container">
                <span className="label">{c.type}: </span>
                <a href={c.link} target="_blank" rel="noopener noreferrer">{c.value}</a>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Decoration Animation */}
        <div className="decoration-container">
          <DotLottieReact
            src="https://lottie.host/492e3089-628c-40e6-9d29-c6e32797c1f8/YIvn1muLGi.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;