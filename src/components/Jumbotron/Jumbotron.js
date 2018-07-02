import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
    <div className="jumbotron" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
        <h1>Garbage Pale Kids Memory Game!</h1>
        <h2>
            Click on the card to get points!  Only click a card one time or you will lose!
        </h2>
    </div>
)

export default Jumbotron;