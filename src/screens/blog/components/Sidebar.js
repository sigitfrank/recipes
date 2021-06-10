import React from 'react'
import Fade from 'react-reveal/Fade';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import getDate from '../../../helpers/getDate';
function Sidebar({ articles }) {
    return (
        <div className="col-md-3">
            <div className="social-media-links">
                <Fade bottom cascade>
                    <span className="follow-us">Follow Us</span>
                    <ul>
                        <li>
                            <FaFacebook className="social-icon" />
                            <span className="social-title"> Bagi Resep</span>
                        </li>
                        <li>
                            <FaTwitter className="social-icon" />
                            <span className="social-title">@bagiResep</span>
                        </li>
                        <li>
                            <FaInstagram className="social-icon" />
                            <span className="social-title">@bagiResep</span>
                        </li>
                    </ul>
                </Fade>
            </div>
            <div className="top-articles">
                {
                    articles.map((article, index) => {
                        const { author, title, url, urlToImage, source, publishedAt } = article
                        const { name } = source
                        return (index >= 13) && (<Fade bottom cascade key={index}>
                            <p className="top-category">Other Articles</p>
                            <div className="article">
                                <img src={urlToImage} alt="blog-list" className="img-fluid" />
                                <div className="content">
                                    <span className="category">{name}</span>
                                    <p className="title"> <a target="_blank" rel="noopener noreferrer" href={url}> {title}</a></p>
                                    <span className="author">{author} - {getDate(publishedAt)}</span>
                                </div>
                            </div>
                        </Fade>)
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar
