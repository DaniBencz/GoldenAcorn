'use strict';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/reducers';

const store = createStore(rootReducer, composeWithDevTools());

//exports to index
export default store;