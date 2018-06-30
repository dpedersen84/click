import React, {Component} from "react";
import _ from "underscore";
import Jumbotron from "../components/Jumbotron";
import ClickCard from "../components/ClickCard";
import cards from "../data.json";

class Game extends Component {

    state = {
        cards
    };

    shuffleCard = () => {
        this.setState({cards: _.shuffle(cards)})
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
                onClick={this.shuffleCard}
                />
            ))}
            <button className="btn btn-danger" onClick={this.shuffleCard}>
                Shuffle
            </button>
            </div>
        </div>
        );
    }
}

export default Game;