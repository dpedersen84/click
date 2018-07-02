import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Game from "./pages/Game";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Jumbotron backgroundImage="https://i.imgur.com/g2EkSbL.jpg"/>
      {/* <Wrapper> */}
        <Route exact path="/" component={Game} />
      {/* </Wrapper> */}
      <Footer />
    </div>
  </Router>
)

export default App;
