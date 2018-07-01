import React from "react";

const Alert = props => (

    <div
        role="alert"
        className={`alert alert-${props.type} fade in`}
    >
        {props.children}
    </div>

);

export default Alert;