import Slider from "../utilities/Slider";

import scrollImg from '../images/scroll-down.svg';

const Hero = () => {
    return (
        <section className="section_hero">
            <Slider />
            <div className='scroll-down'>
                <button><img src={scrollImg} alt="Scroll Down" /></button>
            </div>
        </section>
    )
}

export default Hero;