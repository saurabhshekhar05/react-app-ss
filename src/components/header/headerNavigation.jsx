import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class HeaderNavigation extends Component {
  state = {};
  render() {
    return (
      <div className="bd-example">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <NavLink to="/" exact className="navbar-brand">
            My Site
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/" exact className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" exact className="nav-link">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/registration" exact className="nav-link">
                  Registration
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/counters" exact className="nav-link">
                  Counters
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/lifecycle" exact className="nav-link">
                  Lifecycle
                </NavLink>
              </li>
            </ul>
            <button className="btn btn-danger navbar-btn">Button</button>
          </div>
        </nav>
      </div>
    );
  }
}

export default HeaderNavigation;
