import React, {Component} from "react";
import _ from "underscore";
import Scoreboard from "../components/Scoreboard";
import ClickCard from "../components/ClickCard";
import cards from "../data.json";
import "./Game.css";

class Game extends Component {

    state = {
        cards,
        score: 0,
        topScore: 10

    };

    // Shuffle cards on page load
    componentDidMount = () => {
        this.setState({cards: _.shuffle(cards)})
    }

    // Shuffle cards and add to score when cards are clicked
    handleClick = (id) => {

        // const cards = this.state.cards.filter(card => card.id !== id)
        // this.setState({cards});
        // console.log(cards);

        const thisCard = this.state.cards.filter(card => card.id === id)
        console.log(thisCard);

        this.setState({cards: _.shuffle(cards)})
        this.setState({ score: this.state.score + 1 });

        // console.log("score");
        // console.log(this.state.score);


    };

    render() {
        return (
        <div>
            <Scoreboard
                score= {this.state.score}
                topScore = {this.state.topScore}
            />
                <div className="container" id="main">
                    {/* <div className="row"> */}
                        {/* <div className="col-md-8"> */}
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
                        {/* </div> */}
                    {/* </div>        */}
                </div>
        </div>
        );
    }
}

export default Game;