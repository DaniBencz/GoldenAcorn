'use strict';
//'real' reducer

const initState = {
  acorns: 0
}
function acornsReducer(state = initState, action) {
  if (action.type === 'INCREASE_ACORNS') {
    return {
      ...state,
      acorns: state.acorns + action.acorn,
      lastAccess: new Date()
    }
  } else if (action.type === 'DECREASE_ACORNS' && state.acorns > 0) {
    return Object.assign({}, state, { acorns: state.acorns - action.acorn })
    //no timestamp here
  }
  return state;
}
//export to reducers
export default acornsReducer;