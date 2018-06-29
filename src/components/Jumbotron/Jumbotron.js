import React from "react";
import "./Jumbotron.css";

class Jumbotron extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="jumbotron">
                        <h1>Clicky Game!</h1>
                        <p>
                            Click on the image to get points!  Do not click an image twice or you will lose!
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jumbotron;