import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
    <div className="jumbotron" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
        <h1>Memory Game!</h1>
        <h2>
            Click on the image to get points!  Only click an image one time or you will lose!
        </h2>
    </div>
)

export default Jumbotron;