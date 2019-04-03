'use strict';
import PropTypes from 'prop-types'
import React from 'react';
import ReactDOM from 'react-dom';

function Button(props) {
  //destructuring
  const { change, text } = props;
  //console.log(text);
  //console.log(props);
  return <button onClick={props.change}>{props.text}</button>;
};
function Display(props) {
  //console.log(props);
  return (
    <div className="counter">
      {props.children}
    </div>
  );
};
class SimpleGoldenAcornApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { acorns: 0 };
    this.buyAcorn = this.buyAcorn.bind(this);
    this.eatAcorn = this.eatAcorn.bind(this);
  };
  render() {
    //console.log(this.props);
    return (
      <div className='inner'>
        <Button change={this.buyAcorn} text="Buy one" />
        {/* containment */}
        <Display>{this.state.acorns}</Display>
        <Button change={this.eatAcorn} text="Eat one" />
      </div>
    )
  };
  //using => to skip manula binding doesn't work
  buyAcorn(e) {
    //console.log(e.target);
    //console.log(this);
    //state.acorns++;
    //the above is 'wrong', below is 'right'
    this.setState({ acorns: this.state.acorns + 1 }, () => { this.myCallback() });
    //for that, you need a class
  };
  myCallback() {
    console.log('state is set');
  };
  eatAcorn(e) {
    this.setState({ acorns: this.state.acorns - 1 }, () => { this.myCallback() });
    //prevState is for linear execution
    this.setState(prevState => ({ acorns: prevState.acorns - 1 }));
    console.log(this.state.acorns);
  };
};
ReactDOM.render(
  <SimpleGoldenAcornApp />,
  document.getElementById('root'),
);