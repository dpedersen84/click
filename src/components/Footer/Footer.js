import React from "react";
import "./Footer.css";

class Footer extends React.Component {
    render() {
        return (
            <nav className="footer">
                <ul>
                    <li className="contact">
                        <a href="https://www.github.com/dpedersen84/">© 2018 - Daniel Pedersen</a>
                        {/* <a href="https://www.linkedin.com/in/dpedersen84/" className="fab fa-linkedin">LinkedIn</a>
                        <a href="https://www.linkedin.com/in/dpedersen84/" className="fab fa-github">Github</a>
                        <a href="https://www.linkedin.com/in/dpedersen84/" className="fab fa-facebook">Facebook</a>
                        <a href="https://www.linkedin.com/in/dpedersen84/" className="fab fa-envelope">Gmail</a>
                        <a href="https://www.linkedin.com/in/dpedersen84/" className="fab fa-trello">Trello</a> */}
                    </li>
                </ul>
            </nav>
        );
    }
};

export default Footer;