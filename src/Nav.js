import image from './image/inkedlogo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const test = () => {
        let mainNav = document.getElementById("menur");
                mainNav.classList.toggle("active");
            };
    const sub = () => {
        let submenu = document.getElementById("subm");
                submenu.classList.toggle("sub-active");
        };

    return ( 
        <header>
            <nav className="navigation">
                <ul className="menu" id="menur">
                    <li className="logo"><img src={image} alt="Logo"/></li>
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
        </header>
     );
}
 
export default Navbar;