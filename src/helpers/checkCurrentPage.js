const checkCurrentaPage = (url) => {
    const urls = ['profile', 'about-us', 'blog', 'add-recipes']
    return urls.includes(url.split('/')[3]) || false
}

export default checkCurrentaPage