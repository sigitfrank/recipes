const getDate = (date) => {
    const newDate = new Date(date)
    const year = newDate.getFullYear()
    const month = newDate.getMonth()
    const day = newDate.getDay()
    console.log(newDate)
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return `${day} ${monthNames[month]} ${year}`
}

export default getDate