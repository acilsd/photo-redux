import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import store, { history } from './store/configureStore';
import router from './router';

import styles from './style/main.styl';

const container = document.querySelector('.container');

render(
  <Provider store={store}>
    <Router history={history} routes={router} />
  </Provider>
  , container
);
