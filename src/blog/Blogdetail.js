import { SectionTitle } from '../utilities/UiElements';
import { useParams } from "react-router-dom";
import { getBlogData } from "../utilities/constants";

const Blogdetail = (props) => { 
    let params = useParams();
    let blogData = getBlogData(params.id);
    console.log(blogData);   

    return(
        <section className="section-row blog-page__detail">

            <section className="blog-detail__header">           
                <img src={`.${blogData.blogTitleImg}`} alt={blogData.blogTitle} />
            </section>

            <div className="container flex-column">
                <div className='col-12'>
                <SectionTitle title={blogData.blogTitle} subTitle={blogData.blogSubTitle} />               
                 </div>
                 <div className='col-12'>       
                    <p>{blogData.blogIntro}</p>
                    <p>{blogData.blogDescriptionFirst}</p>                    
                    <p><pre>{blogData.blogCodeblockFirst}</pre></p>                    
                    <p>{blogData.blogDescriptionSecond}</p>
                    <p><pre>{blogData.blogCodeblockSecond}</pre></p>
                    <p><img src={`.${blogData.blogImg}`} alt={blogData.blogTitle} /></p>
                    <p>{blogData.blogSummary}</p>
                    <p>Link to files: <a href={blogData.blogGitLink} target="_blank" alt="" rel="noreferrer">{blogData.blogGitLink}</a></p>             
                </div>
            </div>

        </section>
    )
}

export default Blogdetail;