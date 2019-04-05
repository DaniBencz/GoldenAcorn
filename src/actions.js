'use strict';

//'actions must be plain objects'
function boughtAcorn(value) {
  return {
    type: 'INCREASE_ACORNS',
    acorn: value
  }
}
function ateAcorn(value) {
  return {
    type: 'DECREASE_ACORNS',
    acorn: value
  }
}

//exports to buyAcorn, eatAcorn
export { boughtAcorn, ateAcorn }