import { Link } from "react-router-dom";
import navicon from '../images/nav.svg';

const Navbar = () => {
    return (
        <>
            <Link to="/projects" className="align-right m-align-default">Projects</Link>
            <Link to="/about">About Me</Link>
            <Link to="/">Blogs</Link>
            <Link to="/">
            <span>
                <img src={navicon} alt="Menu" />
            </span>
            </Link>
        </>
    )
}

export default Navbar;