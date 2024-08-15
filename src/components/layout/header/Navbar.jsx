import React from "react";
import { Link } from "react-router-dom";

function Navbar({ currentUser, logOut }) {
  return (
    <nav className="navbar navbar-expand navbar-dark p-0 bg-dark">
      {currentUser ? (
        <>
          <div className="text-grey">
            Welcome <span className="text-success">{currentUser.Name}</span>
          </div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/news" className="nav-link">
              &gt;&gt;&nbsp;&nbsp;News
              </Link>
            </li>
            <li className="nav-item float-right">
              <a href="/login" className="nav-link" onClick={logOut}>
                &gt;&gt;&nbsp;&nbsp; Logout
              </a>
            </li>
          </ul>
        </>
      ) : (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;