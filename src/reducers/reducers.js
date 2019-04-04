'use strict';
import { combineReducers } from 'redux';
import acorns from './acorns';

const rootReducer = combineReducers({
  acorns,
});

//exports to store
export default rootReducer;