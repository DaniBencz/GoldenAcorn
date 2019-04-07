'use strict';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

/*import BuyAcorn from './containers/buyAcorn';
import EatAcorn from './containers/eatAcorn';
import Display from './containers/dispProps';

const App = (props) => (
  <div className='inner'>
    <BuyAcorn />
    <Display />
    <EatAcorn />
  </div>
);*/

import Content from './reduxApp';
import noRedux from './noReduxApp';

const App = () => (
  <BrowserRouter>
    <Route path="/" component={Content} />
  </BrowserRouter>
);

/* const App = (props) => (
  <div className='wrapper'>
    <Content />
  </div>
); */

export default App;