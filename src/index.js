'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/app';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  //Provider for Redux
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root'),
);