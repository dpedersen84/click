import React, { Component } from 'react';
import _ from "underscore";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import ClickCard from './components/ClickCard';
import cards from "./data.json";
import "./App.css";

class App extends Component {
  
  state = {
    cards
  };

  shuffleCard = () => {
    this.setState({cards: _.shuffle(cards)})
  
  }

  render() {
    return (
      <div>
      <Navbar />,
    
      <Jumbotron />
        <div className="container">
          {this.state.cards.map(card => (
            <ClickCard  
              id={card.id}
              key={card.id}
              image={card.image}
              name={card.name}
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

// const App = () => <Navbar />;
export default App;
