'use strict';
import { combineReducers } from 'redux';
import acornsReducer from './acorns';
console.log(acornsReducer);

const rootReducer = combineReducers({
  acornsReducer
});

//exports to store
export default rootReducer;