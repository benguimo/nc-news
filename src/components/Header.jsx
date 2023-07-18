import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';
import user from '../images/user.png';
import home from "../images/home.png";
import about from "../images/about.png";

const Header = () => {
return (
    <nav>
            <div className="nav-container">
                <div>
                <NavLink to="/"><img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/977/8477073977_2a7d4c49-2514-402f-be0a-626124183bd1.png?cb=1689686955" alt="logo" className="nav-logo" /></NavLink> 
                </div>
                <ul className="nav-links">
                    <li>
                        <NavLink to="/"><img src={home} alt="" /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/about"><img src={about} alt="" /></NavLink>
                    </li>
                    <li>
                        <img src={user} alt="" />
                    </li>
                </ul>
           </div>
        </nav>
)
}


export default Header
