import { Link } from "react-router-dom";
import '../styles/header.css';

const Header = () => {
    return (
        <div className="led-border">
            <div className="header">
                <div className="my-name">
                    <h1>
                        {"Letago Kekana".split("").map((char, i) => (
                            <span key={i}>{char}</span>
                        ))}
                    </h1>
                </div>



                <div className="menu">
                    <nav>
                        <ul>
                            <li><Link to="/" >Home</Link></li>
                            <li><Link to="/About" >About</Link></li>
                            <li><Link to="/Projects" >Projects</Link></li>
                            <li><Link to="/Contact" >Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;