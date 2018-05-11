import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import css from "./App.module.sass"
import AppLayout from "./app/AppLayout";
import Home from "./home/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div className={css.container}>
          <AppLayout/>
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
