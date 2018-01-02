import React from 'react';
import {render} from 'react-dom';
import Root, {foo} from './containers/root';

const appContainer = document.getElementById('app');
const renderApp = () => render(<Root />, appContainer);

renderApp();
