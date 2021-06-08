import axios from 'axios'
export const getBlogs = async (req, res) => {
    let page = req.body.page || 1
    if (page > 6 || page < 1) page = 1
    try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=food%20recipes&pageSize=16&page=${page}&apiKey=${process.env.NEWS_API_CREDENTIALS}`)
        const { articles } = response.data
        return res.status(200).json({ success: true, articles, pageState: page })

    } catch (error) {
        return res.status(400).json({ success: false, data: [] })
    }
}