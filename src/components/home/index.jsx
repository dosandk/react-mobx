// @flow

import React from 'react';
import {Link, Route} from 'react-router-dom';
import Counter from '../counter';
import ItemsList from '../items-list';

const Home = () => {
  return (<div>
    <h1>Home Component</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/counter">Counter</Link>
      </li>
      <li>
        <Link to="/items-list">ItemsList</Link>
      </li>
    </ul>
    <Route path={'/counter'} component={Counter} />
    <Route path={'/items-list'} component={ItemsList} />
  </div>);
};

export default Home;
