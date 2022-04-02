import { CardWrap, SectionTitle } from "../utilities/UiElements";
import { Blogdata } from "../utilities/constants";
import { Link } from "react-router-dom";

const Blogs = () => {
    return(
        <>
            <SectionTitle 
                title="Blogs &amp; Learning" 
                subTitle="I have written few Blogs to strenthen up my learnings 
                and sharing what I understand.">
            </SectionTitle>
            <div className="container section-spacing__bottom">            
                <div className="row">
                    {Blogdata.map(({blogTitle, blogSubTitle, blogTitleImg, id}) => (                    
                    <div className="col-md-3 blog_item" key={id}>
                        <CardWrap classes="align-center">
                            <img src={blogTitleImg} alt="" />
                            <h1>{blogTitle}</h1>
                            <p>{blogSubTitle}</p>
                            <Link to={`/blog/${id}`}>Read Article test</Link>
                        </CardWrap>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Blogs;