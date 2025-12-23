import { Link } from "react-router-dom";
import '../styles/global.css';
import '../styles/footer.css';

const Footer = () => {
    const socialLinks = [
        {
            name: "Github",
            url: "https://github.com/savage-kid-lk",
            icon: "https://img.icons8.com/ios-glyphs/90/github.png"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/letago-kekana-34087a279/",
            icon: "https://img.icons8.com/ios-glyphs/90/linkedin.png"
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/letago.kekana.7737/",
            icon: "https://img.icons8.com/ios-glyphs/90/facebook-new.png"
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/savage_kid_lk/",
            icon: "https://img.icons8.com/ios-glyphs/90/instagram-new.png"
        }
    ];

    return (
        <footer className="footer">
            <div className="footer-stars-overlay"></div>

            <div className="my-github">
                <h2>VIEW MY PROJECTS ON GITHUB</h2>
                <p>Computer Science Graduate | Frontend Developer | Problem Solver</p>
                <a href="https://github.com/savage-kid-lk" target="_blank" rel="noopener noreferrer">
                    <button className="github-button">GITHUB</button>
                </a>
            </div>

            <div className="Social-media">
                {socialLinks.map((social, i) => (
                    <div className="social-platforms" key={i} style={{ "--i": i }}>
                        <a href={social.url} target="_blank" rel="noopener noreferrer">
                            <img src={social.icon} alt={social.name} />
                            <span>{social.name}</span>
                        </a>
                    </div>
                ))}
            </div>

            <div className="footer-menu">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Projects">Projects</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>

            <div className="copyright">
                <p>© 2025 Letago Kekana. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;