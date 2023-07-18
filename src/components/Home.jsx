import { useState } from 'react'
import { NavLink } from "react-router-dom";
import React from 'react';
import "./Home.css"

function Home() {

  return (
    <nav>
    <div className="home">
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
</nav>
  )
}

export default Home
