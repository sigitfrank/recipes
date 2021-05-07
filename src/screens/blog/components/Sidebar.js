import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
function Sidebar() {
    return (
        <div className="col-md-3">
            <div className="social-media-links">
                <span className="follow-us">Follow Us</span>
                <ul>
                    <li><FaFacebook className="social-icon" /> <span className="social-title"> Bagi Resep</span></li>
                    <li><FaTwitter className="social-icon" /> <span className="social-title">@bagiResep</span></li>
                    <li><FaInstagram className="social-icon" /> <span className="social-title">@bagiResep</span></li>
                </ul>
            </div>
            <div className="top-articles">
                <p className="top-category">Top Articles</p>
                <div className="article">
                    <img src="/assets/blog/blog-lists/2.png" alt="blog-list" className="img-fluid" />
                    <div className="content">
                        <span className="category">Food News</span>
                        <p className="title">How McDonald's Makes Money: Franchising Fast Food</p>
                        <span className="author">M Yunan Adiyaksatama - March 2021</span>
                    </div>
                </div>
                <div className="article">
                    <img src="/assets/blog/blog-lists/2.png" alt="blog-list" className="img-fluid" />
                    <div className="content">
                        <span className="category">Food News</span>
                        <p className="title">How McDonald's Makes Money: Franchising Fast Food</p>
                        <span className="author">M Yunan Adiyaksatama - March 2021</span>
                    </div>
                </div>
                <div className="article">
                    <img src="/assets/blog/blog-lists/2.png" alt="blog-list" className="img-fluid" />
                    <div className="content">
                        <span className="category">Food News</span>
                        <p className="title">How McDonald's Makes Money: Franchising Fast Food</p>
                        <span className="author">M Yunan Adiyaksatama - March 2021</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
