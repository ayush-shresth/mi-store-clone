import '../style/Header.css'
import React from 'react'

function Header(props) {
    return (
        <div className='header'>
            <div></div>
            <p>{props.text}</p>
            <div></div>
        </div>
    )
}

export default Header
