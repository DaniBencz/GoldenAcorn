'use strict';
import React from 'react';
import BuyAcorn from '../containers/buyAcorn';
import EatAcorn from '../containers/eatAcorn';
import Display from '../containers/display';
import store from '../store';
import { boughtAcorn } from '../actions';
import { ateAcorn } from '../actions';
import KeyEventRegister from '../keyRegister';

const content = () => (
  <div className='inner'>
    <p>Redux App</p>
    {/* <KeyEventRegister buy={() => {store.dispatch(boughtAcorn(1))}} eat={() => {store.dispatch(ateAcorn(1))}} />  */}
    <BuyAcorn />
    <Display>
    </Display>
    <EatAcorn />
  </div>
);
export default content;