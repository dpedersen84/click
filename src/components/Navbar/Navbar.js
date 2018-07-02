import React from "react";
import "./Navbar.css";

const Navbar = props => (
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="/">Clicky Game</a>
              </div>
                <ul className="nav navbar-text navbar-right">
                    <a className="navbar-brand" href="/about">About</a>
                </ul>
            </div>
          </nav>
)

export default Navbar;