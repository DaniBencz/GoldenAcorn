'use strict';

import React from 'react';
import BuyAcorn from './containers/buyAcorn';
import EatAcorn from './containers/eatAcorn';
import Display from './containers/dispProps';

const App = (props) => (
  <div className='inner'>
    <BuyAcorn />
    <Display />
    {/* like this for children
    <Display>
    </Display> */}
    <EatAcorn />
  </div>
);

export default App;