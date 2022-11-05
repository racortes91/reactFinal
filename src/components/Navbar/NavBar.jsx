import React from "react";

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav__brand">
                    <a className="nav__list" href="#">Mi marca</a>
                </div>
                <ul>
                    <li>
                        <a className="nav__link" href="#">Categoria1</a>
                    </li>
                    <li>
                        <a className="nav__link" href="#">Categoria2</a>
                    </li>
                    <li>
                        <a className="nav__link" href="#">Categoria3</a>
                    </li>
                </ul>
            </nav>
        </div>
    ); 
}

export default NavBar;