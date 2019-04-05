'use strict';
//'real' reducer
//import BuyAcorn from '../containers/buyAcorn';
//import EatAcorn from '../containers/eatAcorn';

const initState = {
  acorns: 0
}
function acornsReducer(state = initState, action) {
  if (action.type === 'INCREASE_ACORNS') {
    return {
      ...state,
      acorns: state.acorns + 1,
      //acorns: state.acorns + action.value,
      lastAccess: new Date()
    }
  } else if (action.type === 'DECREASE_ACORNS') {
    return Object.assign({}, state, { acorns: state.acorns - 1 })
    //no timestamp here
  }
  return state;
}
//export to reducers
export default acornsReducer;

