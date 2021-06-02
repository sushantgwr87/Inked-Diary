import image from './image/INK-flat.png';
import { Link } from 'react-router-dom';
import logo2 from './image/Sgwr_dragon2.png';

const Navbar = () => {
    const test = () => {
        let mainNav = document.getElementById("menur");
                mainNav.classList.toggle("active");
            };
    const sub = () => {
        let submenu = document.getElementById("subm");
                submenu.classList.toggle("sub-active");
        };
    
    const linkedin = "https://www.linkedin.com/in/sushant-gangwar/";
    const github = "https://github.com/sushantgwr87";

    return ( 
        <div>
            <nav className="navigation">
                <ul className="menu" id="menur">
                    <li className="logo"><img className="logo-nav" src={image} alt="Logo"/></li>
                    <li className="menu-item"><Link className="navlink" to="/">Home</Link></li>
                    <li className="menu-item"><Link className="navlink" to="/about">About</Link></li>
                    <li className="menu-item submenu" onClick={sub}>
                        <Link className="navlink" to="#C">Categories <i className="fa fa-chevron-down"></i></Link>
                        <ul className="sub" id="subm">
                            <li className="sub-item"><Link to="/thrill">Thrill</Link></li>
                            <li className="sub-item"><Link to="/crime">Crime</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item new-blog"><Link to="/create"><button><i className="fa fa-plus"></i> Blog</button></Link></li>
                    <li className="nav-toggle" onClick={test}><i className="fa fa-bars"></i></li>
                </ul> 
            </nav>
            <div className="nav-image">
                <img src="https://source.unsplash.com/900x400/?book,dark-library" alt="randomimage" />
            </div>
            <footer>
                <div className="out-links">
                    <a target="_blank" rel="noopener noreferrer" href={github}><i className="fab fa-github"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href={linkedin}><i className="fab fa-linkedin-in"></i></a>
                </div>
                <div className="copyright">&copy; Copyright to <img src={logo2} alt="sgwr-logo"/> SGWR CREATIONS</div>
            </footer>
        </div>
     );
}
 
export default Navbar;