import React from "react";
import {NavLink,Outlet } from "react-router-dom";
import logo from '../ilogo.png';
const Navbar = () => {
 return (
    <>
       <header className="header">
            <nav className="nav container">
                <div class='logo'>
            <img src={logo} alt=""/>
            </div>
                    <div className="nav-menu">
                        <p className="nav-item">
                            <NavLink to= "/"className="nav-link">
                            Home
                            </NavLink>
                        </p>
                        <p className="nav-item">
                            <NavLink to="/Menu" className="nav-link">
                                Menu
                            </NavLink>
                        </p>
                        <p className="nav-item">
                            <NavLink to="/contact" className="nav-link">
                                Contact
                            </NavLink>
                            </p>
                        <p className="nav-item">
                            <NavLink to="/aboutus" className="nav-link">
                                About
                            </NavLink>
                            </p>
           </div>

            </nav>
        </header>
    <Outlet/>
    </>
 );
};
export default Navbar;