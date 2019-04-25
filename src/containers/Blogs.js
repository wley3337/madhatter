import React from 'react'
import BlogDetail from '../components/BlogDetail'
import { blogsArray } from '../enumerables/blogsArray'

const Blogs = () => {
    return(
        <div className="text blogs-main">
            <p className="blogs-main-title">A sample of some of my blog posts. You can find the compleate list hosted on Medium <a href="https://medium.com/@wley3337" alt="medium profile page" target="_blank" rel="noopener noreferrer" >here</a></p>
            <div>
                {blogsArray.map( blog => <BlogDetail key={blog.id} {...blog}/>)}

            </div>
        </div>
    )
}

export default Blogs