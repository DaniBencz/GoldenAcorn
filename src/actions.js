'use strict';

function incrAcorn(value) {
  return {
    type: 'INCREASE_ACORNS',
    acorn: value
  }
}
function decrAcorn(value) {
  return {
    type: 'DECREASE_ACORNS',
    acorn: value
  }
}

//?
//exports to?
export default { incrAcorn, decrAcorn }
module.exports = { incrAcorn };