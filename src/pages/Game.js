import React, {Component} from "react";
import _ from "underscore";
import Jumbotron from "../components/Jumbotron";
import ClickCard from "../components/ClickCard";
import cards from "../data.json";

class Game extends Component {

    state = {
        cards,

    };

    // Shuffle cards on page load
    componentDidMount = () => {
        this.setState({cards: _.shuffle(cards)})
    }

    // Shuffle cards and add to score when cards are clicked
    handleClick = () => {
        this.setState({cards: _.shuffle(cards)})
        console.log("score");
        this.setState({ score: this.state.score + 1 });
    }

    render() {
        return (
        <div>
        <Jumbotron backgroundImage="https://i.imgur.com/qkdpN.jpg"/>
            <div className="container">
            {this.state.cards.map(card => (
                <ClickCard  
                id={card.id}
                key={card.id}
                image={card.image}
                name={card.name}
                handleClick={this.handleClick}
                />
            ))}
            </div>
        </div>
        );
    }
}

export default Game;