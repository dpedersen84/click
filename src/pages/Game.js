import React, {Component} from "react";
import _ from "underscore";
import Scoreboard from "../components/Scoreboard";
import ClickCard from "../components/ClickCard";
import cards from "../data.json";
import Alert from "../components/Alert";
import "./style.css";

class Game extends Component {

    state = {
        cards,
        score: 0,
        topScore: 10,
        cardsPicked: [],
        success: "",

    };

    // Shuffle cards on page load
    componentDidMount = () => {
        this.setState({cards: _.shuffle(cards)})
    }

    // Shuffle cards and add to score when cards are clicked
    handleClick = (id) => {

        const thisCard = this.state.cards.filter(card => card.id === id)
        console.log(thisCard);

        this.setState({cards: _.shuffle(cards)})
        this.setState({ score: this.state.score + 1 });

        if (this.state.score === 12) {
            this.setState({success: "Victory!"})
            this.setState({score: 0})
            // window.location.reload();
        }
    };

    render() {
        return (
            <div className="container" id="main">
                <Alert 
                    type="success"
                    style={{ opacity: this.state.success ? 1 : 0, marginBottom: 10 }}
                >
                    {this.state.success}
                </Alert>
                <Scoreboard
                    score= {this.state.score}
                    topScore = {this.state.topScore}
                />
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
        );
    }
}

export default Game;