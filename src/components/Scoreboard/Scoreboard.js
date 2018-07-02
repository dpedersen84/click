import React from "react";

class Scoreboard extends React.Component {
    render() {
        return (
            <div className="container" id="scores">
                Score: {this.props.score} | Top Score: {this.props.topScore}
            </div>
        )
    }
}
export default Scoreboard;