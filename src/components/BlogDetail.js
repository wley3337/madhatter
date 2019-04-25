import React from 'react'

const BlogDetail = ({title, desc, link}) =>{
    return(
        <div className="text blog-detail">
            <p className="blog-detail-title">{title}</p>
            <p className="blog-detail-desc">{desc}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="blog-detail-img"><div className="blogs-icon"></div></a>
        </div>
    )
}

export default BlogDetail