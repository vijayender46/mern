import { Link } from 'react-router-dom';
import vijayenderImg from '../images/vijayender-Web-Developer.png';

const About = () => {
    return(
        <div className="container section-spacing" id="about">
            <div className="col-md-6 aboutImg">
                <img src={vijayenderImg} alt="Vijayender Thakur" />
            </div>
            <div className="col-md-6 about-des">
                <h2>About Me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   Corem kpsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Link className='btn btn-cta' to="https://www.upwork.com/freelancers/~011c8c9baf880dcb88" target="_blank">Hire on Upwork</Link>
            </div>
        </div>
    )
}

export default About;