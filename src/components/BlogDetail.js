import React from 'react'

const BlogDetail = ({title, desc, link}) =>{
    return(
        <div className="text blog-detail">
            <p className="blog-detail-title">{title}</p>
            <p className="blog-detail-desc">{desc}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="blog-detail-img"><img alt="blog link" src="/img/Card-flat.png"/></a>
        </div>
    )
}

export default BlogDetail