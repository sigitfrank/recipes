import express from 'express'
import { getBlogs } from '../controllers/blog.js'

const blogRouter = express.Router()
blogRouter.get('/', getBlogs)

export default blogRouter