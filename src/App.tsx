import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { About, Home } from './components';

function App() {

  return (
    <Router>
      <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
      </Switch> 
    </Router>
  );
}

export default App;
