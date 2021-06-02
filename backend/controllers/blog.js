import axios from 'axios'
export const getBlogs = async (req, res) => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=food&pageSize=16&apiKey=${process.env.NEWS_API_CREDENTIALS}`)
        const { articles } = response.data
        return res.status(200).json({ success: true, articles })

    } catch (error) {
        return res.status(400).json({ success: false, data: [] })
    }
}