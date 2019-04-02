import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

let acorns = 0;

let buyAcorn = (e) => {
  console.log(e.target);
  acorns--;
};

let eatAcorn = (e) => {
  console.log(e.target);
  acorns++;
};

function App() {
  return (
    <div className='inner'>
      <button onClick={buyAcorn}>Buy one</button>
      <div className='counter'>
        {acorns}
      </div>
      <button onClick={eatAcorn}>Eat one</button>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);