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
        currentCard: "",
        cardsPicked: [],
        gameOver: false,
        winner: false,

    };

    componentDidMount = () => {
        console.log(this.state)
        this.shuffleCards();
        console.log("Starting Score:", this.state.score)
        console.log("Top Score:", this.state.topScore)
    }

    handleClick = (id) => {
        console.log(id)

        if (this.state.cardsPicked.includes(id)) {
            this.loseGame();
        } else {
            this.shuffleCards();
            this.updateScore();

            this.state.cardsPicked.push(id)

            console.log(this.state.cardsPicked)
        }
    };
    
    shuffleCards = () => {
        this.setState({cards: _.shuffle(cards)})
    };

    updateScore = () => {
        let newScore = this.state.score + 1
        console.log("new score", newScore)
        this.setState({ score: newScore })
        
        if (newScore > this.state.topScore) {
            console.log("new top score")
        }
        if (newScore === 3) {
            this.winGame()
        }
    };

    gameRestart = () => {
        this.setState({ winner: false })
        this.setState({ gameOver: false })
        this.scoreReset()
        this.cardsPickedReset()
        this.shuffleCards()
        console.log("New Game!")
    };

    loseGame = () => {
        console.log("Game Over")
        this.setState({ gameOver: true })
        // this.gameRestart();
    }

    winGame = () => {
        console.log("Winner!")
        this.setState({ winner: true })
        // this.gameRestart();
    }

    scoreReset = () => {
        this.setState({ score: 0})
    };

    cardsPickedReset = () => {
        this.setState({ cardsPicked: [] })
    };

    render() {
        return (
            <div className="container" id="main">
                <Alert 
                    type="success"
                    style={{ opacity: this.state.winner ? 1 : 0, marginBottom: 5 }}
                >
                    Winner!
                </Alert>

                <Alert 
                    type="warning"
                    style={{ opacity: this.state.gameOver ? 1 : 0, marginBottom: 5 }}
                >
                    Game Over!
                </Alert>
                <div>
                    <button 
                        className="btn btn-danger" 
                        style={{ opacity: this.state.gameOver || this.state.winner ? 1 : 0, marginBottom: 5 }}
                        onClick={ () => this.gameRestart() }
                    >
                    New Game
                    </button>
                </div>
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
                        handleClick={() => this.handleClick(card.id)}
                        // style={{ opacity: this.state.gameOver || this.state.winner ? 0 : 1 }}
                    />
                ))}

                

                

            </div>
        );
    }
}

export default Game;

// To do:
// 1. Register cards that have been clicked
// 2. Update top score
// 3. Game complete and game over functionality
// 4. Final style changes