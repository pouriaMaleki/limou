import React, { Component } from 'react';
import { Router, Route } from "react-router-dom";
import Home from "./home/Home";
// import css from "./App.module.sass"

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    );
  }
}

export default App;
