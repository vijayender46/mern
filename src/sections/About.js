import vijayenderImg from '../images/vijayender-Web-Developer.png';

const About = () => {
    return(
        <div className="section-spacing light-background" id="about">
            <div className='container'>
                <div className="col-md-6 aboutImg">
                    <img src={vijayenderImg} alt="Vijayender Thakur" />
                </div>
                <div className="col-md-6 about-des">
                    <h2>About Me</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Corem kpsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a className='btn btn-cta' href="https://www.upwork.com/freelancers/~011c8c9baf880dcb88" target="_blank" rel="noreferrer">Hire on Upwork</a>
                </div>
            </div>
        </div>
    )
}

export default About;