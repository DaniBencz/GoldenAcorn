'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

function BuyOne(props) {
  return <button onClick={props.change}>Buy one</button>;
};
function EatOne(props) {
  return <button onClick={props.change}>Eat one</button>;
};
function Display(props) {
  return <div className="counter">{props.name}</div>;
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { acorns: 0 };
    this.buyAcorn = this.buyAcorn.bind(this);
    this.eatAcorn = this.eatAcorn.bind(this);
  }

  render() {
    return (
      <div className='inner'>
        <BuyOne change={this.buyAcorn} />
        <Display name={this.state.acorns} />
        <EatOne change={this.eatAcorn} />
      </div>
    );
  }
  buyAcorn(e) {
    console.log(e.target);
    console.log(this);
    //state.acorns++;
    //the above is 'wrong', below is 'right'
    this.setState({ acorns: this.state.acorns + 1 });
    //for that, you need a class
  };

  eatAcorn (e) {
    this.setState({ acorns: this.state.acorns - 1 });
  };
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);