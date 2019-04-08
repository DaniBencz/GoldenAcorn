'use strict';
import React from 'react';
import store from './store';
import { boughtAcorn } from './actions';
import { ateAcorn } from './actions';

class KeyEventRegister extends React.Component {
  constructor(props){
    super(props);
    this.keyStroke = this.keyStroke.bind(this);
  }
  render() {
    return null;
  }
  componentDidMount() {
    window.addEventListener('keydown', this.keyStroke);
  };
  componentWillUnmount(){
    console.log('keyStroke() unmounted');
    window.removeEventListener('keydown', this.keyStroke);
  }
  keyStroke(e) {
    if (e.keyCode === 38) {
      store.dispatch(boughtAcorn(1));
    } else if (e.keyCode === 40) {
      store.dispatch(ateAcorn(1));
    }
  };
};

//exports to reduxApp
export default KeyEventRegister