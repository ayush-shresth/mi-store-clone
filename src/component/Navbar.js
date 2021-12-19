import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Navbar.css'
import { logo } from "../data/data.json"

function Navbar() {
    return (
        <div className='nav'>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Not" id="logo" />
                </Link>
            </div>
            <Link className="navLinks" to="/miphones">Xiaomi Phones</Link>
            <Link className="navLinks" to="/redmiphones">RedMi Phones</Link>
            <Link className="navLinks" to="/tv">T.V</Link>
            <Link className="navLinks" to="/laptops">Laptop</Link>
            <Link className="navLinks" to="/lifestyle">Fitness </Link>
            <Link className="navLinks" to="/home">Home</Link>
            <Link className="navLinks" to="/audio">Radio</Link>
            <Link className="navLinks" to="/accessories">Accessories</Link>
            <div className="searchBox">
                <input type="text" name="search" placeholder='Search Products' />
                <i class="material-icons">search</i>
            </div>
        </div>
    )
}

export default Navbar
