import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ currentUser, logout }) => {

  console.log(currentUser);
  return (
    <nav>
      <div>
        <Link to="/">
          VIBE
        </Link>
      </div>
      {
        currentUser ? (
                        <>
                          <div>
                            <div>
                              {currentUser.id}
                              <Link to="/" onClick={logout}>Log out</Link>
                              <Link to={`/user/${currentUser.id}`}>Playlist</Link>
                            </div>
                          </div>
                        </>
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