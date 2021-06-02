import react_logo from './image/react.png';
import json_logo from './image/json2.png';
import me from './image/me2.png';

const About = () => {
    return (
        <div className="about">
            <h2>This Project is made using React and JSON database</h2>
            <div className="about-logo">
                <img src={react_logo} alt="reactLogo" />
                <img src={json_logo} alt="jsonlogo" />
            </div>
            <div className="me">
                <img src={me} alt="SushantGangwar" />
                <h3>I am Sushant Gangwar, a freelance web developer and graphic designer.</h3>
            </div>
        </div>
    );
}
 
export default About;