import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import '../../css/blog/header.css'
const styleHeader = {
    backgroundImage: "url('/assets/blog/header.png')"
}
function Blog() {
    return (
        <>
            <header className="blog" style={styleHeader}>
                <div className="description">
                    <h1>How Pasta Became the World's Favourite</h1>
                    <div className="content">
                        <p>Pasta has topped a global survey of the world's favourite foods. So how did the dish so closely associated with italy became a staple of so many tables around the globe?</p>
                    </div>
                    <a className="btn read" href="/blog/1">Read Article</a>
                </div>
            </header>
            <div className="container-fluid">
                <section className="category">
                    <ul>
                        <li className="active">All Categories</li>
                        <li>Breakfast</li>
                        <li>Lunch</li>
                        <li>Dinner</li>
                        <li>Appertizer</li>
                        <li>Dessert</li>
                        <li>Food News</li>
                    </ul>
                </section>

                <section className="blog-main">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="blog">
                                        <img src="/assets/blog/blog-lists/1.png" alt="blog-list" className="img-fluid" />
                                        <div className="content">
                                            <span className="category">Food News</span>
                                            <p className="title">How McDonald's Makes Money: Franchising Fast Food</p>
                                            <span className="author">M Yunan Adiyaksatama - March 2021</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="blog">
                                        <img src="/assets/blog/blog-lists/1.png" alt="blog-list" className="img-fluid" />
                                        <div className="content">
                                            <span className="category">Food News</span>
                                            <p className="title">How McDonald's Makes Money: Franchising Fast Food</p>
                                            <span className="author">M Yunan Adiyaksatama - March 2021</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="blog">
                                        <img src="/assets/blog/blog-lists/1.png" alt="blog-list" className="img-fluid" />
                                        <div className="content">
                                            <span className="category">Food News</span>
                                            <p className="title">How McDonald's Makes Money: Franchising Fast Food</p>
                                            <span className="author">M Yunan Adiyaksatama - March 2021</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="social-media-links">
                                <span>Follow Us</span>
                                <ul>
                                    <li><FaFacebook className="social-icon" /> Bagi Resep</li>
                                    <li><FaTwitter className="social-icon" /> @bagiResep</li>
                                    <li><FaInstagram className="social-icon" /> @bagiResep</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Blog
