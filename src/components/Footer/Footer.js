import React from "react";
import "./Footer.css";

class Footer extends React.Component {
    render() {
        return (
            <div className="navbar navbar-default navbar-fixed-bottom">
                <div className="container-fluid">
                    <p className="navbar-text pull-left">© 2018 - Daniel Pedersen.
                        {/* <a href="https://www.linkedin.com/in/dpedersen84/" className="fab fa-linkedin">LinkedIn</a>
                        <a href="https://www.linkedin.com/in/dpedersen84/" className="fab fa-github">Github</a>
                        <a href="https://www.linkedin.com/in/dpedersen84/" className="fab fa-facebook">Facebook</a>
                        <a href="https://www.linkedin.com/in/dpedersen84/" className="fab fa-envelope">Gmail</a>
                        <a href="https://www.linkedin.com/in/dpedersen84/" className="fab fa-trello">Trello</a> */}
                    </p>
                </div>
            </div>
        );
    }
};

export default Footer;