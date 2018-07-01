import React from "react";
import "./ClickCard.css";

const ClickCard = props => (

    <div className = "card">
        <div className = "img-container">
            <img className = "img-thumbnail" id={props.id} alt={props.name} src={props.image} onClick={() => props.handleClick(props.id)}/>
        </div>
    </div>



);

export default ClickCard;