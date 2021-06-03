export const loadingBlogs = [1, 2, 3, 4, 5, 6]

export const parallaxStyling = ({ bgImage, height }) => {
    return {
        backgroundImage: `url(${bgImage})`,
        height: height,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
}