import React from "react";
import "./ClickCard.css";

const ClickCard = props => (

        // <div className = "image">
            <img className = "img-thumbnail" id={props.id} alt={props.name} src={props.image} onClick={() => props.handleClick(props.id)}/>
        // </div>
);

export default ClickCard;