import React from 'react'
import logo from '../image/LOGO.png';
import '../App.css';
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='container'>
                <div className="navbar-left">
                    <a href="#" >
                        <img src={logo} alt="Logo" className="logo" />
                    </a>
                    <li >Course </li> <span><i class="fa-solid fa-angle-down"></i> </span>
                    <li> progress</li> <span><i class="fa-solid fa-angle-down"></i> </span>
                </div>
                <div className="navbar-right">
                    <span> <i className="fa fa-search"></i> </span>
                    <span className="login-text">Login</span>
                    <button className="join-button">Join Now</button>
                </div>
            </div>
        </nav>


    )
}

export default Navbar



