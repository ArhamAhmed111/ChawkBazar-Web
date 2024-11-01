import React, { useState } from 'react';
import Images from '../../../public/Assets/Images/logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='nav'>
            <div className='nav-logo'>
                <img src={Images} alt="Logo" />
            </div>
            <div className='nav-toggle' onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
            <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to='/contact'>Contact us</Link></li>
                </ul>
                <div className='nav-btn'>
                    <Link to='/signup'>
                        <button style={{backgroundColor:"#F5F5F5"}}>Sign up</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
