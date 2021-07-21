import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ currentUser, logout }) => {

  console.log(currentUser);
  return (
    <nav className='navbar'>
      {
        currentUser ? (
                          <div>
                            {currentUser.id}
                            <Link to="/" onClick={logout}>Log out</Link>
                            <br />
                            <Link to={`/user/${currentUser.id}`}>Playlist</Link>
                          </div>
                      ) 
                    :   
                      (
                        <div>
                          <Link to="/signup">Sign up</Link>
                          <Link to="/login">Log in</Link>
                        </div>
                      )
      }
    </nav>
  )
}

export default NavBar;