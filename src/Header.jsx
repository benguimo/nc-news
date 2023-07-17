import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
return (
    <nav>
            <div className="nav-container">
                <div>
                    <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/500/8475015500_71138b04-7bbf-4663-a942-ef17b43ccdbd.png?cb=1689602570" alt="logo" className="nav-logo" />
                </div>
                <ul className="nav-links">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/lists">Lists</NavLink>
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
