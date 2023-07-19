import { NavLink } from "react-router-dom";
import React from 'react';
import "./Home.css"
import user from '../images/user.png';

function Home() {
  return  (
<main>
<div className="home">

          <div className="user-section">
            <img src={user} alt="" />
            <p className="username-text">Guest</p>
             </div>
        
        <p className="welcome">
            <span>Welcome to NC News!</span> <br /> You're logged in as "Guest"
        </p>
        <div className="home-links">
                
                    <NavLink to="/comments"><button>Comments</button></NavLink>
                
                    <NavLink to="/articles"><button>Articles</button></NavLink>
                   
                    <NavLink to="/users"><button>Users</button></NavLink>
                
        </div>
   </div>

</main>

  ) 
}

export default Home
