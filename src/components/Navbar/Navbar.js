import React from "react";
import "./Navbar.css";

const Navbar = props => (
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="/">GPK</a>
              </div>
                <div className="nav navbar-right">
                    <a className="nav navbar-text" href="/about">About</a>
                </div>
            </div>
          </nav>
)

export default Navbar;