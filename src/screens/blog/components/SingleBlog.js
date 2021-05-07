import React from 'react'
import Fade from 'react-reveal/Fade';
function SingleBlog() {
    return (
        <div className="col-md-4">
            <Fade left cascade>
                <div className="blog">
                    <img src="/assets/blog/blog-lists/1.png" alt="blog-list" className="img-fluid" />
                    <div className="content">
                        <span className="category">Food News</span>
                        <p className="title">How McDonald's Makes Money: Franchising Fast Food</p>
                        <span className="author">M Yunan Adiyaksatama - March 2021</span>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default SingleBlog
