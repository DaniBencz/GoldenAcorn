'use strict';
import React from 'react';
import BuyAcorn from '../containers/buyAcorn';
import EatAcorn from '../containers/eatAcorn';
import Display from '../containers/display';
import KeyEventRegister from '../keyRegister';

const Content = () => (
  <div className='inner'>
    <p>Redux App</p>
    <KeyEventRegister />
    <BuyAcorn />
    <Display>
    </Display>
    <EatAcorn />
  </div>
);
//exports to app
export default Content;