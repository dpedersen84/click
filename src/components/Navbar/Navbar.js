import React from "react";
import "./Navbar.css";

const Navbar = props => (
          <nav className="navbar">

            <ul>
              <li className="brand">
                <a href="/">Click</a>
              </li>
              <li className="text">
                Don't click an image twice!
              </li>
              <li className="score">
                Score: {props.score} | Top Score: {props.topScore}
              </li>
                
            </ul>

          </nav>
)

export default Navbar;