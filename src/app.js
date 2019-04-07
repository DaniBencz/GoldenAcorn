'use strict';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Error = () => (
  <div>
    <p>Error: path does not exist!</p>
  </div>
);

import Hello from './components/home'
import Content from './components/reduxApp';
import NoRedux from './components/noReduxApp';
import Navigation from './components/navigation';

const App = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Switch>
        <Route path="/" component={Hello} exact />
        <Route path="/redux" component={Content} />
        <Route path="/states" component={NoRedux} />
        <Route component={Error} />
      </Switch>
    </div>
  </BrowserRouter>
);

/* const App = (props) => (
  <div className='wrapper'>
    <NoRedux />
    <Content />
  </div>
); */

export default App;