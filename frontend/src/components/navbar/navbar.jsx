import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ currentUser, logout }) => {

  return (
    <nav className='navbar'>
      {
        currentUser ? (
            <>
              <Link to={`/quiz`}>
                <img 
                  src="https://cdn.discordapp.com/attachments/844198011239923724/867901223784939570/VIBE_LOGO-C.png" 
                  alt="vibelogo" 
                  className='navbar-logo'
                />
              </Link>
              <div className="nav-bar-links">
                <div className="dropdown">
                  <a className="signup-login-link dropbtn">    {/* change this to Link when I create userShow --> */}
                    {/* {currentUser.id} */}
                    <i className="fas fa-bars fa-2x drop-icon"></i>
                  </a>
                  <div className="dropdown-content">
                    <Link to={`/user/${currentUser.id}`}>My Vibes</Link>
                    <Link to={`/random`}>Get a random playlist!</Link>
                    <Link to={`/quiz`}>Take the quiz again!</Link>
                    <Link to="/" onClick={logout}>Log out</Link>
                  </div>
                </div>
              </div>
            </>
        ) 
      :   
        (
          <div>
              <div className="nav-bar-links">
                <div className="dropdown">
                  <a className="signup-login-link dropbtn">    {/* change this to Link when I create userShow --> */}
                    {/* {currentUser.id} */}
                    <i className="fas fa-bars fa-2x drop-icon"></i>
                  </a>
                  <div className="dropdown-content">
                    <Link to="/signup">Sign up</Link>
                    <Link to="/login">Log in</Link>
                  </div>
                </div>
              </div>
            </div>
        )
      }
    </nav>
  )
}

export default NavBar;