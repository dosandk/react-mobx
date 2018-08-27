import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'mobx-react';
import {counterStore, itemsListStore} from './stores';
import Routes from './routes';
import {enableLogging} from 'mobx-logger';

const stores = {
  counterStore,
  itemsListStore
  /* other stores */
};

const App = () => (
  <Provider {...stores}>
    <Routes />
  </Provider>
);

const appContainer = document.getElementById('app');
const renderApp = () => render(<App />, appContainer);

renderApp();
enableLogging();
