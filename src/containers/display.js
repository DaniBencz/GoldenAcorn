'use strict';

import React from 'react';

function display(props) {
  return <div className="counter">{props.acorns}</div>;
};

//exports to dispProps
export default display;