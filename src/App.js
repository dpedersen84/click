import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Game from "./pages/Game";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Game} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
)

// class App extends Component {
  
//   state = {
//     cards
//   };

//   shuffleCard = () => {
//     this.setState({cards: _.shuffle(cards)})
  
//   }

//   render() {
//     return (
//       <div>
//       <Navbar />,
    
//       <Jumbotron />
//         <div className="container">
//           {this.state.cards.map(card => (
//             <ClickCard  
//               id={card.id}
//               key={card.id}
//               image={card.image}
//               name={card.name}
//               onClick={this.shuffleCard}
//             />
//           ))}
//           <button className="btn btn-danger" onClick={this.shuffleCard}>
//             Shuffle
//           </button>
//         </div>
//       <Footer />
//       </div>
//     );
//   }
// }

export default App;
