import React from 'react'
import SingleBlog from './SingleBlog'
function ListBlogs({ articles }) {
    return (
        <div className="col-md-9">
            <div className="row">
                {
                    articles.map((article, index) => {
                        return (index > 0 && index < 13) && <SingleBlog key={index} article={article} />
                    })
                }
            </div>
        </div>
    )
}

export default ListBlogs
