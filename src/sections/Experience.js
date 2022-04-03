import React from 'react';
import { SectionTitle } from '../utilities/UiElements';
import { Blogdata } from "../utilities/constants";

export default function Experience() {
  return (
    <section className='section'>
        <div className='boxed-wrap container d-flex'>
            <div className='col-sm-6 text-left'>
                <SectionTitle 
                    title="Experience" 
                    subTitle="Client and organisations I have worked with multiple skills and roles.">
                </SectionTitle>
                
            </div>
            <div className='col-sm-6 boxed-wrap-text text-left'>
            <p>
                    I have start my careerin 2013 with internship in Web Designing. After working with graphics and html for almost 2 years I found my attraction toward CMS like wordpress and Shopify. I designed mockups and wrote html and now
                     I was giving this life using CMS and with that I got my hands on core concepts of development while customizing CMS code to custome requirments and now here I am working with REACTjs for almost 2 years. I have worked for different clients and agencies listed below.
                </p>
                <ul className='org-logos'>
                {Blogdata.map(({blogTitle, blogSubTitle, blogTitleImg, id}) => ( 
                    <li><img src={blogTitleImg} alt={blogTitle} /></li>
                    ))}
                </ul>

            </div>

        
        </div>

         
    </section>
  )
}

