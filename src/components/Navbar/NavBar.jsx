import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav__brand">
                    <NavLink className="nav__list" to="/" > 
                        <img src="../../assets/logo02"></img>
                    </NavLink>
                </div>
                <ul>
                    <li>
                        <NavLink className="nav__link" to="/categoria/ps5" >Play Station 5 </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav__link" to="/categoria/nintendo" >Nintendo </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav__link" to="/categoria/xbox" >Xbox </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav__link" to="/cart" > 
                            <CartWidget />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div> 
    ); 
}

export default NavBar;