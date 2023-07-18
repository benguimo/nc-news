import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css'


const Header = () => {
return (
    <nav>
            <div className="nav-container">
                <div>
                    <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/676/8476733676_6cd1cb44-7b8e-452c-81c0-b089cb4000fe.png?cb=1689666441" alt="logo" className="nav-logo" />
                </div>
                <ul className="nav-links">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                </ul>
           </div>
        </nav>
)
}


export default Header
