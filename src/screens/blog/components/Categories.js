import React from 'react'
import Fade from 'react-reveal/Fade';
function Categories() {
    return (<Fade top cascade>
        <ul>
            <li className="active">All Categories</li>
            <li>Breakfast</li>
            <li>Lunch</li>
            <li>Dinner</li>
            <li>Appertizer</li>
            <li>Dessert</li>
            <li>Food News</li>
        </ul>
        </Fade>
    )
}

export default Categories
