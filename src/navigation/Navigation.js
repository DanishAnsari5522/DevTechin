import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../src/assets/main1.png';
import { Link } from 'react-router-dom'

import './Navbar.css'

const Navigation = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <Link to='/' className='logo'>
                    <img src="#" alt='logo' />
                    <p className='text-white normal-case text-xl danhead'><span className='text-red-400'>Dev</span>Techin</p>
                </Link>
                
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to='/' onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' onClick={closeMenu}>About US</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' onClick={closeMenu}>Services</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/work' onClick={closeMenu}>Work</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/team' onClick={closeMenu}>Team</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' onClick={closeMenu}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;