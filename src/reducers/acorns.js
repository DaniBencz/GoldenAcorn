'use strict';
//'real' reducer
const initState = {
  acorns: 0
}
function acorns(state = initState, action) {
  if (action.type === 'INCREASE_ACORNS') {
    return {
      ...state,
      acorns: state.acorns + 1,
      //acorns: state.acorns + action.value,
      lastAccess: new Date()
    }
  } else if (action.type === 'DECREASE_ACORNS') {
    return {
      ...state,
      acorns: state.acorns + 1,
      lastAccess: new Date()
    }
  }
}
//export to reducers
export default acorns;

