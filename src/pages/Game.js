import React, {Component} from "react";
import _ from "underscore";
import Jumbotron from "../components/Jumbotron";
import Scoreboard from "../components/Scoreboard";
import ClickCard from "../components/ClickCard";
import cards from "../data.json";

class Game extends Component {

    state = {
        cards,
        score: 0,
        topScore: 0

    };

    // Shuffle cards on page load
    componentDidMount = () => {
        this.setState({cards: _.shuffle(cards)})
        console.log(this.state.score);
    }

    // Shuffle cards and add to score when cards are clicked
    handleClick = () => {
        this.setState({cards: _.shuffle(cards)})
        console.log("score");
        this.setState({ score: this.state.score + 1 });
        console.log(this.state.score);
    }

    render() {
        return (
        <div>
        <Jumbotron backgroundImage="https://i.imgur.com/qkdpN.jpg"/>
        <Scoreboard
            score= {this.state.score}
        />
            <div className="container cards">
                {/* <div className="cards"> */}
                    {this.state.cards.map(card => (
                        <ClickCard  
                        id={card.id}
                        key={card.id}
                        image={card.image}
                        name={card.name}
                        handleClick={this.handleClick}
                        />
                    ))}
                {/* </div> */}
            </div>
        </div>
        );
    }
}

export default Game;