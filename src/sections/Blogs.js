import { CardWrap, SectionTitle } from "../utilities/UiElements";
import { Blogdata } from "../utilities/constants";
import { Link } from "react-router-dom";

const Blogs = (props) => {
    return(
        <>
            <SectionTitle 
                title="Blogs &amp; Learning" 
                subTitle="I have written few Blogs to strenthen up my learnings 
                and sharing what I understand.">
            </SectionTitle>
            <div className="container">            
                <div className="row">
                    {Blogdata.map(({blogTitle, blogSubTitle, blogImg, id}) => (                    
                    <div className="col-md-3" key={id}>
                        <CardWrap classes="align-center">
                            <img src={blogImg} alt="" />
                            <h1>{blogTitle}</h1>
                            <p>{blogSubTitle}</p>
                            <Link to={"/blogdes/"+id}>Read Article</Link>
                        </CardWrap>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Blogs;