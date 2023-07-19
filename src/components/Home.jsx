import { NavLink } from "react-router-dom";
import React from 'react';
import "./Home.css"
import user from '../images/user.png';

function Home() {
  return  (
<main>
<div className="home">
        <img src={user} alt="" />
        <p>
            <span>Welcome to NC News!</span> <br /> You're logged in as "Guest"
        </p>
        <div className="home-links">

                <button>
                    <NavLink to="/comments">Comments</NavLink>
                </button>


                <button>
                    <NavLink to="/articles">Articles</NavLink>
                    </button>

                <button>
                    <NavLink to="/users">Users</NavLink>
                </button>
        </div>
   </div>

</main>

  ) 
}

export default Home
