import React, { useState, useEffect } from 'react'
import '../../css/blog/blog.css'
import Categories from './components/Categories'
import ListBlogs from './components/ListBlogs'
import Sidebar from './components/Sidebar'
import Fade from 'react-reveal'
import axios from 'axios'
import { GET_BLOGS_URL } from '../../api/endpoints'
import SkeletonLoading from '../../components/SkeletonLoading'
import { loadingBlogs, parallaxStyling } from '../../constants/blog'
import changePage from '../../controllers/blog/changePage'

function Blog() {
    const [articles, setArticles] = useState([])
    const [singleArticle, setSingleArticle] = useState('')
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)

    useEffect(() => {
        setLoading(true)
        const getBlogs = async () => {
            try {
                const data = {
                    page
                }
                const response = await axios.post(GET_BLOGS_URL, data)
                const { articles, pageState } = response.data
                if (pageState > 6 || pageState < 1) setPage(pageState)
                setArticles(articles)
                setSingleArticle(articles[0])
                setLoading(false)
            } catch (error) {
                setLoading(false)
            }
        }
        getBlogs()
    }, [page])
    return (
        <>
            {singleArticle && (<header className="blog" style={parallaxStyling({ bgImage: '/assets/blog/header.png', height: '800px' })}>
                <div className="description">
                    <Fade cascade top>
                        <h1>{singleArticle.title}</h1>
                        <div className="content">
                            <p>{singleArticle.description}</p>
                        </div>
                        <a className="btn read" target="_blank" rel="noopener noreferrer" href={singleArticle.url}>Read Article</a>
                    </Fade>
                </div>
            </header>)}

            <div className="container-fluid">
                {/* <section className="category">
                    <Categories />
                </section> */}
                {loading ? (<section className="blog-main mt-3">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row">
                                {
                                    loadingBlogs.map(error => {
                                        return (
                                            <div className="col-md-4" key={error}>
                                                <div className="blog">
                                                    <SkeletonLoading width={"100%"} height={150} />
                                                    <div className="content">
                                                        <SkeletonLoading width={"100%"} height={50} />
                                                        <SkeletonLoading width={"100%"} height={50} />
                                                        <SkeletonLoading width={"100%"} height={50} />
                                                    </div>
                                                </div>
                                            </div>)
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-md-3">
                            <SkeletonLoading width={"100%"} height={300} />
                            <SkeletonLoading width={"100%"} height={100} />
                            <SkeletonLoading width={"100%"} height={100} />
                            <SkeletonLoading width={"100%"} height={100} />
                        </div>
                    </div>
                </section>) : articles && (<section className="blog-main">
                    <h2>Articles</h2>
                    <div className="row">
                        <ListBlogs articles={articles} />
                        <Sidebar articles={articles} />
                    </div>
                    <nav aria-label="blog-pagination">
                        <ul className="pagination justify-content-start">
                            {page > 1 && (<li className="page-item" onClick={() => changePage({ type: 'prev', page, setPage })}>
                                <span className="page-link">Previous</span>
                            </li>)}
                            <li className="page-item" onClick={() => changePage({ type: 'next', page, setPage })}>
                                <span className="page-link">Next</span>
                            </li>
                        </ul>
                    </nav>
                </section>)}
            </div>
        </>
    )
}

export default Blog
