import React, {Component} from "react";
import _ from "underscore";
import Scoreboard from "../components/Scoreboard";
import Card from "../components/Card";
import cards from "../data.json";
import Alert from "../components/Alert";
import "./style.css";

class Game extends Component {

    state = {
        cards,
        score: 0,
        topScore: 10,
        cardsPicked: [],
        clicked: false,
        right: "",
        wrong: "",

    };

    // Shuffle cards on page load
    componentDidMount = () => {
        this.setState({cards: _.shuffle(cards)})
    }

    // Shuffle cards and add to score when cards are clicked
    handleClick = (id) => {

        const thisCard = this.state.cards.filter(card => card.id === id)
        console.log(thisCard);

        const cardPicked = this.state.cards.filter(card => card.clicked === true)
        console.log(cardPicked);

        this.setState({cards: _.shuffle(cards)})
        this.setState({ score: this.state.score + 1 });

        if (this.state.score === 12) {
            this.setState({right: "Victory!"})
        }

        if (this.state.clicked === true) {
            this.setState({wrong: "Already Clicked!!"})
        }
    };

    render() {
        return (
            <div className="container" id="main">
                <Alert 
                    type="success"
                    style={{ opacity: this.state.right ? 1 : 0, marginBottom: 10 }}
                >
                    {this.state.right}
                </Alert>

                <Alert 
                    type="warning"
                    style={{ opacity: this.state.wrong ? 1 : 0, marginBottom: 10 }}
                >
                    {this.state.wrong}
                </Alert>

                <Scoreboard
                    score= {this.state.score}
                    topScore = {this.state.topScore}
                />

                {this.state.cards.map(card => (
                    <Card  
                        id={card.id}
                        key={card.id}
                        image={card.image}
                        name={card.name}
                        clicked={card.clicked}
                        handleClick={this.handleClick}
                    />
                ))}
            </div>
        );
    }
}

export default Game;