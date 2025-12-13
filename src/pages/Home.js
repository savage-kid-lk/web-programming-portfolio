import '../styles/global.css';
import '../styles/home.css';

const Home = () => {
    return (
        <div className="home-page">
            
            <h1 className="summary-title">SUMMARY</h1>

            <div className="about-summary card">
                <h1>About Me</h1>
                <p>
                    As a highly motivated and ambitious computer science graduate at Tshwane 
                    University of Technology, I possess a unique blend of technical expertise 
                    and soft skills that enable me to drive innovation and deliver results. 
                    With a solid foundation in leadership, teamwork, and communication, I 
                    excel in collaborative environments and I am passionate about harnessing 
                    my proficiency in various programming languages and video editing to 
                    develop cutting-edge solutions. As a rapid learner and adaptable team 
                    player, I thrive in fast-paced settings and am eager to leverage my skills 
                    to tackle complex challenges and contribute to the success of a 
                    forward-thinking organization in the tech industry.
                </p>
            </div>

            <h1 className="skills-title">Skills</h1>

            <div className="skills-summary">
                <div className="skill-item">
                    <img src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" />
                    <span>Java</span>
                </div>

                <div className="skill-item">
                    <img src="https://img.icons8.com/color/48/html-5--v1.png" />
                    <span>HTML</span>
                </div>

                <div className="skill-item">
                    <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-cascading-style-sheets-language-used-for-describing-the-presentation-of-a-document-logo-color-tal-revivo.png" />
                    <span>CSS</span>
                </div>

                <div className="skill-item">
                    <img src="https://img.icons8.com/color/48/javascript--v1.png" />
                    <span>JavaScript</span>
                </div>

                <div className="skill-item">
                    <img src="https://img.icons8.com/color/48/mysql-logo.png" />
                    <span>MySQL</span>
                </div>

                <div className="skill-item">
                    <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-linux-a-family-of-open-source-unix-like-operating-systems-based-on-the-linux-kernel-logo-color-tal-revivo.png" />
                    <span>Linux</span>
                </div>

                <div className="skill-item">
                    <img src="https://img.icons8.com/office/40/react.png" />
                    <span>React.js</span>
                </div>

                <div className="skill-item">
                    <img src="https://img.icons8.com/nolan/64/node-js.png" />
                    <span>Node.js</span>
                </div>

                <div className="skill-item">
                    <img src="https://img.icons8.com/fluency/48/microsoft-office-2019.png" />
                    <span>Microsoft Office</span>
                </div>
            </div>
        </div>
    );
};

export default Home;
