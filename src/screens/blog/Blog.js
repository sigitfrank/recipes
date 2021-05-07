import React from 'react'
import '../../css/blog/header.css'
import Categories from './components/Categories'
import ListBlogs from './components/ListBlogs'
import Sidebar from './components/Sidebar'
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
                    <Categories />
                </section>

                <section className="blog-main">
                    <div className="row">
                        <ListBlogs />
                        <Sidebar />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Blog
