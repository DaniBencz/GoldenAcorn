'use strict';
import { combineReducers } from 'redux';
import acornsReducer from './acorns';

const rootReducer = combineReducers({
  acornsReducer
});

//exports to store
export default rootReducer;