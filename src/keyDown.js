'use strict';
import { connect } from 'react-redux';
import React from 'react';
import BuyAcorn from './containers/buyAcorn';
import EatAcorn from './containers/eatAcorn';
import Display from './containers/dispProps';

const content = (props) => (
  <div className='inner'>
    <BuyAcorn />
    <Display>
    </Display>
    <EatAcorn />
  </div>
);

function componentDidMount() {
  window.addEventListener('keydown', keyStroke);
};

const mapDispatchToProps = (dispatch) => {
  return {
    change: () => {
      dispatch(boughtAcorn(1));
    }
  };
};

function keyStroke(e) {
  if (e.keyCode === 38) {
    console.log('up');
  } else if (e.keyCode === 40) {
    console.log('down');
  }
};

const Content = connect(
  componentDidMount,
  keyStroke
  )(content);

export default Content;