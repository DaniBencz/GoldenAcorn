'use strict';

import React from 'react';
import { connect } from 'react-redux';

function display(props) {
  return <div className="counter">{props.acorns}</div>;
};

const mapStateToProps = (state) => {
  return {
    acorns: state.acornsReducer.acorns
  };
};

const Display = connect(
  mapStateToProps,
)(display);

//exports to reduxApp
export default Display;