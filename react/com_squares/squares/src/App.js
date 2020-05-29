import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <div className="bluebox">
        <p className="white">White on Blue</p>
      </div>
      <div className="redbox">
        <p className="blue">Blue on red</p>
      </div>
      <div className="pinkbox">
        <p className="green">green on pink</p>
      </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
  );
}

export default App;
