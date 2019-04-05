'use strict';

import React from 'react';
import BuyAcorn from './containers/buyAcorn';
import EatAcorn from './containers/eatAcorn';
import Display from './containers/display';

const App = (props) => (
  <div className='inner'>
    <BuyAcorn />
    <Display />
    <EatAcorn />
  </div>
);

export default App;