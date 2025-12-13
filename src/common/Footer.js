import { Link } from "react-router-dom";
import '../styles/global.css';
import '../styles/footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="my-github">
                <h2>VIEW MY PROJECTS ON GITHUB</h2>
                <p>Computer Science Graduate | Frontend Developer | Problem Solver</p>
                <a href="https://github.com/savage-kid-lk" target="_blank" rel="noopener noreferrer">
                    <button className="github-button">GITHUB</button>
                </a>
            </div>
            <div className="Social-media">
                <div className="social-platforms">
                    <a href="https://github.com/savage-kid-lk" target="_blank" rel="noopener noreferrer">
                        <img width="90" height="90" src="https://img.icons8.com/ios-glyphs/90/github.png" alt="github" />
                        <span>Github</span>
                    </a>
                </div>
                <div className="social-platforms">
                    <a href="https://www.linkedin.com/in/letago-kekana-34087a279/" target="_blank" rel="noopener noreferrer">
                    <img width="90" height="90" src="https://img.icons8.com/ios-glyphs/90/linkedin.png" alt="linkedin" />
                    <span>LinkedIn</span>
                    </a>
                </div>
                <div className="social-platforms">
                    <a href="https://www.facebook.com/letago.kekana.7737/" target="_blank" rel="noopener noreferrer">
                    <img width="90" height="90" src="https://img.icons8.com/ios-glyphs/90/facebook-new.png" alt="facebook-new" />
                    <span>Facebook</span>
                    </a>
                </div>
                <div className="social-platforms">
                    <a href="https://www.instagram.com/savage_kid_lk/" target="_blank" rel="noopener noreferrer">
                    <img width="90" height="90" src="https://img.icons8.com/ios-glyphs/90/instagram-new.png" alt="instagram-new" />
                    <span>Instagram</span>
                    </a>
                </div>
            </div>
            <div className="footer-menu">
                <nav>
                    <ul>
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/About" >About</Link></li>
                        <li><Link to="/Projects" >Projects</Link></li>
                        <li><Link to="/Contact" >Contact</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="copyright">
                <p>© 2025 Letago Kekana. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;