import React from "react";

class Scoreboard extends React.Component {
    render() {
        return (
            <div className="container" id="scores">
                <h1>Score: {this.props.score} | Top Score: {this.props.topScore}</h1>
            </div>
        )
    }
}
export default Scoreboard;