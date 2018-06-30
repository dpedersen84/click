import React from "react";
// import { Link } from "react-router-dom";


class Navbar extends React.Component {

  state = {
    score: 0,
    topScore: 0
  };

  handleScore = () => {
    console.log("score");
    this.setState({ score: this.state.score + 1 });
  }

  handleTopScore = () => {

  }

  render() {
      return (
        <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="/">Clicky Game</a>
              </div>
                <ul className="nav navbar-brand navbar-right">
                    <li>Score: {this.state.score} | Top Score: {this.state.topScore}</li>
                </ul>
            </div>
          </nav>
        </div>    
      )
  }
};

export default Navbar;