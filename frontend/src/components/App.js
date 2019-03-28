import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/Home" exact={true} component={Home}/>
        <Redirect to="/Home"/>                {/*dodati ostale routere za history.push?*/}
        </Switch>
      </Router>
    );
  }
}

export default App;