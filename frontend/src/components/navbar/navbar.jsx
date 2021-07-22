import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ currentUser, logout }) => {

  return (
    <nav className='navbar'>
      {
        currentUser ? (
            <div>
              <div className="nav-bar-links">
                <div className="dropdown">
                  <a className="signup-login-link dropbtn">    {/* change this to Link when I create userShow --> */}
                    {/* {currentUser.id} */}
                    <i className="fas fa-bars fa-2x drop-icon"></i>
                  </a>
                  <div className="dropdown-content">
                    <Link to={`/user/${currentUser.id}`}>My Vibes</Link>
                    <Link to="/" onClick={logout}>Log out</Link>
                  </div>
                </div>
              </div>
            </div>
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