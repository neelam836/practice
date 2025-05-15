import React from 'react';
import { Link } from 'react-router-dom';

import './Design.css';

function Navbaaar(props) {
    return (
        <div><div>
             <nav className='navbar fixed-top bg-light'>
            <Link to='/' className='text-muted'><label className='lbl'>INDIVIDUAL </label></Link>
           
            <Link to='/business' className='text-muted'><label className='lbl'>BUSINESS</label></Link>
           
            <Link to='/investor' className='text-muted'><label className='lbl'>INVESTOR</label></Link>
            
        </nav>
        </div>
            <div>
                <h1>hiiii</h1>
            </div>
               
           </div>
    );
}

export default Navbaaar;