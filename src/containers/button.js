'use strict'
import React from 'react';

function Button(props) {
  //destructuring
  const { change, value } = props;
  return <button onClick={props.change}>{props.value}</button>;
};

//exports to buyAcorn, eatAcorn
export default Button;