import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

let acorns = 0;

function App() {
  return (
    <div className='inner'>
      <button className="buyOne">Buy one</button>
      <div className='counter'>
        {Math.floor(Math.random() * 10)}
      </div>
      <button className="eatone">Eat one</button>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

let buyOne = document.querySelector('.buyOne');
let eatOne = document.querySelector('.eatOne');

let eatAcorn = () => {
  acorns++;
};

let buyAcorn = () => {
  acorn--;
};

eatOne.addEventListener('click', eatAcorn);
buyOne.addEventListener('click', buyAcorn);