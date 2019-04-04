'use strict';
//Entry Point

import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
//Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer';
import { connect } from 'react-redux';

function Button(props) {
  //destructuring
  const { change, text } = props;
  return <button onClick={props.change}>{props.text}</button>;
};
function Display(props) {
  return (
    <div className="counter">
      {props.children}
    </div>
  );
};
class SimpleGoldenAcornApp extends React.Component {
  constructor(props) {
    //deleted state from here
    super(props);
    this.buyAcorn = this.buyAcorn.bind(this);
    this.eatAcorn = this.eatAcorn.bind(this);
    this.keyStroke = this.keyStroke.bind(this);
  };
  render() {
    return (
      <div className='inner'>
        <Button change={this.buyAcorn} text="Buy one" />
        {/* containment */}
        <Display>{this.state.acorns}</Display>
        <Button change={this.eatAcorn} text="Eat one" />
      </div>
    )
  };
  componentDidMount() {
    window.addEventListener('keydown', this.keyStroke);
  };
  keyStroke(e) {
    if (e.keyCode === 38) {
      console.log('up');
      this.buyAcorn();
    } else if (e.keyCode === 40) {
      console.log('down');
      this.eatAcorn();
    }
  };
  //using => to skip manual binding need further dependencies
  buyAcorn(e) {
    this.setState(prevState => ({ acorns: prevState.acorns + 1 }));
  };
  myCallback() {
    console.log('state is set');
  };
  eatAcorn(e) {
    if (this.state.acorns > 1) {
      //prevState is for linear execution
      this.setState(prevState => ({ acorns: prevState.acorns - 1 }));
      this.setState({ acorns: this.state.acorns - 1 }, () => { this.myCallback() });
    }
    console.log(this.state.acorns);
  };
};
Button.propTypes = {
  change: PropTypes.func,
  text: PropTypes.string
};
ReactDOM.render(
  //Provider for Redux
  <Provider store={store}>
    <SimpleGoldenAcornApp />,
  </Provider>,
  document.getElementById('root'),
);