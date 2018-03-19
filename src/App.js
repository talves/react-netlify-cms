import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';

const AsyncCMS = Loadable({
  loader: () => import('./components/NetlifyCMS'),
  loading: () => <div>Loading...</div>,
});

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/admin/" exact component={AsyncCMS} />
        </Switch>
      </Router>
    );
  }
}

export default App
