import React from 'react'
import Fade from 'react-reveal/Fade';
import getDate from '../../../helpers/getDate';
function SingleBlog({ article }) {
    const { author, title, url, urlToImage, source, publishedAt } = article
    const { name } = source
    // https://ps.w.org/tiny-default-thumbnail/assets/icon-256x256.png?rev=2504004
    return (
        <div className="col-md-4">
            <Fade top cascade>
                <div className="blog">
                    <img src={urlToImage} alt="blog-list" className="img-fluid" />
                    <div className="content">
                        <span className="category">{name}</span>
                        <p className="title"> <a href={url} target="_blank" rel="noopener noreferrer"> {title}</a></p>
                        <span className="author">{author} - {getDate(publishedAt)}</span>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default SingleBlog
