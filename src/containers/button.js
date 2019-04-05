'use strict'
import React from 'react';

function Button(props) {
  //destructuring
  const { change, value } = props;
  return <button onClick={change}>{value}</button>;
};

//exports to buyAcorn, eatAcorn
export default Button;