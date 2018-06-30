import React from "react";
import "./ClickCard.css";

const ClickCard = props => (

    <div className = "card">
        {/* <div className = "img-container"> */}
        {/* <button> */}
            <img className = "img-thumbnail" alt={props.name} src={props.image} onClick={props.handleClick}/>
        {/* </button> */}
        {/* </div> */}
    </div>



);

export default ClickCard;