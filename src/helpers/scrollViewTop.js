export const scrollViewTop = () => {
    const body = document.querySelector('#root');

    body.scrollIntoView({
        behavior: 'smooth'
    }, 500)
}
