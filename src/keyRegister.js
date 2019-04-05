'use strict';
import React from 'react';

class KeyEventRegister extends React.Component {
  constructor(){
    this.keyStroke = this.keyStroke.bind(this);
  }
  render() {
    return null;
  }
  componentDidMount() {
    window.addEventListener('keydown', this.keyStroke);
  };
  keyStroke(e) {
    if (e.keyCode === 38) {
      store.dispatch(boughtAcorn(1));
    } else if (e.keyCode === 40) {
      store.dispatch(ateAcorn(1));
    }
  };
};

//exports to keyDown
export default KeyEventRegister