import React from 'react'

const BlogDetail = ({title, desc, link}) =>{
    return(
        <div className="text blog-detail">
            <div className="blog-detail-header-wrapper">
                <a href={link} target="_blank" rel="noopener noreferrer" className="blog-detail-title">
                <p >{title}</p>
             
                </a> 
                <a href={link} target="_blank" rel="noopener noreferrer" className="blog-detail-img"><div className="blogs-icon"></div></a>
            
            </div>
            <p className="blog-detail-desc">{desc}</p>
        </div>
    )
}

export default BlogDetail