import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
    <div>
        <div className="container-fluid">
            <div className="jumbotron" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
                <h1>Clicky Game!</h1>
                <p>
                    Click on the image to get points!  Do not click an image twice or you will lose!
                </p>
            </div>
        </div>
    </div>
)

export default Jumbotron;