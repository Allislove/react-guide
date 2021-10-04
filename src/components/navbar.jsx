import React from 'react';
import Header from './header';
import '../navigation.css'


const Navbar = () => {
    
    return(
        <nav className="menu-nav">
            <Header />
            <ul className="nav justify-content-center">
                <li className="nav-item"> <a className="nav-link" href="#"> Home </a> </li>
                <li><a className="nav-link" href="#"> Login </a></li>
                <li><a className="nav-link" href="#"> Register </a></li>
            </ul>
        </nav>

    )
}

export default Navbar;