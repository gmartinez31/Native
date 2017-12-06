import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './containers/Home/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/new-search' component={Home} />
          {/* <Route path='/search_results' component={Results} /> */}
          <Route path='/' exact component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;