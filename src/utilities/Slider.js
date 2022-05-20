import { SliderContent } from '../utilities/constants';
import { Carousel } from 'react-bootstrap';

import gradArrow from '../images/gradient-arrow.svg'; 

const Slider = () => {
    const hero_title = "Project _";
    return (
        <>
        <Carousel variant="dark">        
        { SliderContent.map(({ projectTitle, projectImg, projectLink, id }) => {
            return (
                <Carousel.Item key={id}>
                    <div className='slideItem'>
                        <div className='hero_content'>
                            <h2>{hero_title}</h2>
                            <h1>{projectTitle}</h1>
                            <div className='des'>
                                <h4>Description</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className='mobile-only hero_tech'>
                                    <p><strong>CMS : Wordpress</strong></p>
                                    <p>Tech : JS, PHP, HTML &amp; Figma</p>
                                </div>
                                <a href={projectLink}>Live -&gt;</a>
                            </div>
                        </div>

                        <div className='hero_img'>
                            <img src={projectImg} alt={projectTitle} />
                        </div>

                        <div className='hero_action hero_tech'>
                            <p><strong>CMS : Wordpress</strong></p>
                            <p>Tech : JS, PHP, HTML &amp; Figma</p>
                            <span>
                                <img src="" alt="" />
                                <i><img src={gradArrow} alt="" /></i>
                            </span>                        
                        </div>
                    </div>
                </Carousel.Item>
            )}           
        )}
         </Carousel>         
        </>
    )
}

export default Slider;