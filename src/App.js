import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import ClickCard from './components/ClickCard';
import cards from "./data.json";

class App extends Component {
  
  render() {
    
    return (
      <div>
      <Navbar />,
    
      <Jumbotron />

      {cards.map(card => (
        <ClickCard  
          id={card.id}
          key={card.id}
          image={card.image}
          name={card.name}
        />
      ))}
      </div>
    );
  }
}

// const App = () => <Navbar />;
export default App;
