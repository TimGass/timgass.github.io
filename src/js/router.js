import React from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import About from './about';
import Skills from './skills';
import Portfolio from './portfolio';
import ScrollToTop from './scrollToTop';

class router extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop />
        <Switch>
          <Redirect from="/" exact to="/Portfolio" component={Portfolio} />
          <Route path="/About" component={About} />
          <Route path="/Skills" component={Skills} />
          <Route path="/Portfolio" component={Portfolio} />
        </Switch>
      </Router>
    );
  }
}

export default router;
