import { Link } from 'react-router-dom';
import { Whatido } from '../utilities/constants';
import { SectionTitle, CardWrap } from '../utilities/UiElements';

const WhatIDo = () => {
    return(
        <section className="section-row">
            <SectionTitle title="What I Do" subTitle="Professional UI Designer and Web developer with high tech experience" />
            <div className="container"> 
                { Whatido.map((items) => {   
                    return(            
                        <div className="col-4 p-3" key={items.id}>
                            <CardWrap classes="text-left">
                                <span><img src={items.projectImg} alt={items.cardTitle} /></span>
                                <h2>{items.cardTitle}</h2>
                                <p>{items.cardDescription}</p>
                                <Link to={items.cardLink}>View Projects</Link>  
                            </CardWrap>                 
                        </div>
                    )}
                )}
            </div>
        </section>
    )
}

export default WhatIDo;