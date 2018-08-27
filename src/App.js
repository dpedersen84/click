import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
// import About from "./pages/About";
import Game from "./pages/Game";
import "./App.css";

const App = () => (
  <Router>
    <div>
        <Route exact path="/" component={Game} />
        {/* <Route exact path="/about" component={About} /> */}
      <Footer />
    </div>
  </Router>
)

export default App;
