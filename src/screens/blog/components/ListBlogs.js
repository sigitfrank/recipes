import React from 'react'
import SingleBlog from './SingleBlog'
function ListBlogs() {
    return (
        <div className="col-md-9">
            <div className="row">
                <SingleBlog />
                <SingleBlog />
                <SingleBlog />
                <SingleBlog />
                <SingleBlog />
            </div>
        </div>
    )
}

export default ListBlogs
