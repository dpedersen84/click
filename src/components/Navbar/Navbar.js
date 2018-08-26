import React from "react";
import "./Navbar.css";

const Navbar = props => (
          <nav className="navbar">

            <ul>
              <li className="brand">
                <a href="/">Click</a>
              </li>
              <li>
                Message goes here
              </li>
              <li>
                Score: {props.score} | Top Score: {props.topScore}
              </li>
                
            </ul>

          </nav>
)

export default Navbar;