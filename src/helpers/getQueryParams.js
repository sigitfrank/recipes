const getQueryParams = () => {

    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('search');
    return myParam
}

export default getQueryParams