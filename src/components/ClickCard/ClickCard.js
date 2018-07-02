import React from "react";
import "./ClickCard.css";

const ClickCard = props => (
    <div
        className="card"
        style={{
            backgroundImage: props.image ? `url(${props.image})` : "none"
        }}
        id={props.id} 
        // src={props.image}
        onClick={() => props.handleClick(props.id)}
    >
    </div>
        
        // <img className = "img-thumbnail" id={props.id} alt={props.name} src={props.image} onClick={() => props.handleClick(props.id)}/>
        
);

export default ClickCard;