import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import configureStore from './configureStore';
const store = configureStore();

const ConnectedApp = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <ConnectedApp store={store} />,
  document.getElementById('root')
);
