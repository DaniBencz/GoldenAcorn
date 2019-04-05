import React from 'react';
import ReactDOM from 'react-dom';

function BuyOne(props) {
  return <button onClick={props.change}>Eat one</button>;
};
function EatOne(props) {
  return <button onClick={props.change}>Eat one</button>;
};
function Display(props) {
  return <div className="counter">{props.name}</div>;
}
let state = {
  "acorns": 0
};
let buyAcorn = (e) => {
  console.log(e.target);
  state.acorns++;
  //the above is 'wrong', below is 'right'
  //setState({acorns: state.acorns + 1});
  //but, for that, you need a class
  console.log(state.acorns);
};
let eatAcorn = (e) => {
  console.log(e.target);
  state.acorns--;
  console.log(state.acorns);
};
function App() {
  return (
    <div className='inner'>
      <BuyOne change={buyAcorn} />
      <Display name={state.acorns} />
      <EatOne change={eatAcorn} />
    </div>
  );
}
export default App;
