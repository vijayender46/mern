import { Link } from "react-router-dom";
import Navbar from "../utilities/Navbar";

import logo from '../images/logo.svg';

const Header = () => {
    return (
        <header>
            <div className="container content-left">
                <Link to="/" className="vt-logo"><img src={logo} alt="Vijayender Thakur" /></Link>
                <nav>
                    <Navbar />
                </nav>
            </div>            
        </header>
    )
}

export default Header;