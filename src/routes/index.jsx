// @flow

import * as React from 'react';
import {Router, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from '../components/home';

const Routes = () => (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={Home} />
  </Router>
);

export default Routes;
