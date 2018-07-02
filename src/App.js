import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Game from "./pages/Game";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Jumbotron backgroundImage="https://i.imgur.com/g2EkSbL.jpg"/>
        <Route exact path="/" component={Game} />
      <Footer />
    </div>
  </Router>
)

export default App;
