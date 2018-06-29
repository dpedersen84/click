import React from "react";
import "./Footer.css";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">Clicky Game</a>
                        </div>
                        <p>Copyright 2018 Dan Pedersen</p>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Footer;