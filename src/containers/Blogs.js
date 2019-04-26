import React from 'react'
import BlogDetail from '../components/BlogDetail'
import { blogsArray } from '../enumerables/blogsArray'

const Blogs = () => {
    return(
        <div className="text blogs-main">
            <span>
                <p className="blogs-main-title">Here you'll find a sample of my blog posts. You can find the compleate list hosted on <a href="https://medium.com/@wley3337" alt="medium profile page" target="_blank" rel="noopener noreferrer" className="blogs-link-text"> Medium</a></p>
            </span>
            
            <div className="blogs-details-wrapper">
                {blogsArray.map( blog => <BlogDetail key={blog.id} {...blog}/>)}

            </div>
        </div>
    )
}

export default Blogs