import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-style p-3">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse d-flex align-center justify-content-between"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link text-white" activClassName='active' to="/dashboard">
              <i className="fa fa-dashboard"></i> Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" activClassName='active' to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" activClassName='active' to="/register">
              Register
            </NavLink>
          </li>
        </ul>
        <div style={{ marginRight: 60 }}>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle text-white"
                to="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-user circle"/>user
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                fd
              </div>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-white">ShopAli</h2>
    </nav>
  );
}

export default Navbar;
