import React from 'react';
import { Link } from 'react-router-dom';

import './Design.css';



function NavBar(props) {
    return (
        // <div className=' nav-navbar ' >
            <nav className='  navbar fixed-top bg-dark'>
            <Link to='/'>Home</Link>
           
            <Link to='/about'>About</Link>
           
            <Link to='/login'>Login</Link>
            
        </nav>
            // </div>
    );
}

export default NavBar;