import express from 'express'
import { getBlogs } from '../controllers/blog.js'

const blogRouter = express.Router()
blogRouter.post('/', getBlogs)

export default blogRouter