const changePage = ({ type, page, setPage }) => {
    if (type === 'next')
        return setPage(prevState => prevState + 1)
    if (page > 1)
        return setPage(prevState => prevState - 1)
    return setPage(6)
}

export default changePage