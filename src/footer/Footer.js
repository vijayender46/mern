import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import dribbble from '../images/dribbble.png';

export default function Footer() {
  return (
    <footer>
        <div className='container align-items-center'>
            <div className='col-sm-4 footer-logo'>
                <Link to="/" className="vt-logo"><img src={logo} alt="Vijayender Thakur" /> <b>Vijayender Thakur</b></Link>
            </div>
            <div className='col-sm-4 text-center'>
                <p className='m-0'>&copy; Copyright 2022</p>
            </div>
            <div className='col-sm-4 text-right'>
                <ul className='m-0 footer-social'>
                    <li><Link to="/"><img src={linkedin} alt="Linkdin" /></Link></li>
                    <li><Link to="/"><img src={dribbble} alt="Dribbble" /></Link></li>
                    <li><Link to="/"><img src={instagram} alt="Instagram" /></Link></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}
