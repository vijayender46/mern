 import { SectionTitle } from '../utilities/UiElements';

const Blogdetail = (props) => {
    console.warn(props);
    return(
        <section className="section-row">
            <SectionTitle title={props.blogTitle} subTitle={props.blogSubTitle} />
            <div className="container"> 
                {props.blogDescription}
            </div>
        </section>
    )
}

export default Blogdetail;