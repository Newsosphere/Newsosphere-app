import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Images/Logo.svg'

// Styles
import './Navbar.css'

export default function Navbar() {
    return (
        <div className='Navbar'>
            <div className='Navbar-container'>
                <div className='Navbar-logo'>
                    <img src={Logo} alt="Logo" style={{ width: "40px" }} />
                    <h1 style={{ marginLeft: "20px", color: "#353535" }}>Newso<span style={{ color: "#4FCAFF" }}>sphere</span></h1>
                </div>
                <div className='Navbar-links'>
                    <Link to='/'>Home</Link>
                    <Link to='/weather'>Weather</Link>
                    <Link to='/news'>News</Link>
                </div>
            </div>
        </div>
    )
}
