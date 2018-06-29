import React from "react";

class Jumbotron extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="jumbotron">
                        <h1>Clicky Game!</h1>
                        <p>
                            Click on the image to get points!  Do not click an image twice!
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jumbotron;