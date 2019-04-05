'use strict';

import React from 'react';

function display(props) {
  return (
    <div className="counter">
      {props.children}
    </div>
  );
};

//exports to dispProps
export default display;