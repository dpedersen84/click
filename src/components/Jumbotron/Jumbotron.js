import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
    <div className="jumbotron" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
        <h1>Click</h1>
        {/* <h2>
            Click on an image to get points!  Be sure to keep track!
        </h2> */}
    </div>
)

export default Jumbotron;