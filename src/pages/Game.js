import React, {Component} from "react";
import _ from "underscore";
import Card from "../components/Card";
import cards from "../data.json";
import Alert from "../components/Alert";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";

class Game extends Component {

    state = {
        cards,
        score: 0,
        topScore: 0,
        currentCard: "",
        cardsPicked: [],
        modalType: "",
        alert: false,
        message: "",
        game: true,

    };

    componentDidMount = () => {
        console.log(this.state)
        this.shuffleCards();
        console.log("Welcome!")
        console.log("Starting Score:", this.state.score)
        console.log("Top Score:", this.state.topScore)
    }

    handleClick = (id) => {
        // console.log(id)

        if (this.state.cardsPicked.includes(id)) {
            this.loseGame();
        } else {
            this.correctGuess();
            // this.shuffleCards();
            // this.updateScore();

            this.state.cardsPicked.push(id)

            console.log(this.state.cardsPicked)
        }
    };

    correctGuess = () => {
        console.log("Correct!")
        this.updateScore();
        // this.shuffleCards();
    }
    
    shuffleCards = () => {
        this.setState({cards: _.shuffle(cards)})
    };

    updateScore = () => {
        let newScore = this.state.score + 1
        console.log("Score", newScore)
        this.setState({ score: newScore })

        
        if (newScore > this.state.topScore) {
            this.setState({ topScore: newScore})
            console.log("new top score")
        }
        if (newScore === 18) {
            this.winGame()
        }
        this.shuffleCards();
    };

    gameRestart = () => {
        console.log("New Game!")
        this.setState({ game: true })
        this.setState({ alert: false })
        this.setState({ modalType: "" })

        this.scoreReset()
        this.cardsPickedReset()
        this.shuffleCards()
    };

    loseGame = () => {
        // alert("Game Over")
        console.log("Game Over")
        console.log("===============================")
        this.setState({ game: false })
        this.setState({ alert: true })
        this.setState({ modalType: "warning" })
        this.setState({ message: "You Lose!" })

        // this.gameRestart();
    }

    winGame = () => {
        // alert("Winner!")
        console.log("Winner!")
        console.log("===============================")
        this.setState({ alert: true })
        this.setState({ modalType: "success" })
        this.setState({ message: "You Win!" })
        
        // this.gameRestart();
    }

    scoreReset = () => {
        this.setState({ score: 0})
        // console.log("Starting Score:", this.state.score)
    };

    cardsPickedReset = () => {
        this.setState({ cardsPicked: [] })
    };

    render() {
        return (
            <div>
                <Navbar score={this.state.score} topScore={this.state.topScore}/>
                <Jumbotron backgroundImage="https://i.imgur.com/g2EkSbL.jpg"/>
                    <div className="text-center">
                        <Alert 
                                type={this.state.modalType}
                                style={{ opacity: this.state.alert ? 1 : 0, marginBottom: 5 }}
                                onClick={() => this.gameRestart()}
                            >
                                <h3> { this.state.message } </h3>
                                <div>
                                    <button className="btn btn-primary" onClick={()=>this.gameRestart()}>New Game</button>
                                </div>
                        </Alert>
                    </div>
                    <div className="container" id="main" style={{ opacity: this.state.game ? 1 : 0 }}>
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
                <Footer />
            </div>
        );
    }
}

export default Game;