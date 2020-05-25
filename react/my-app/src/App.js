import React from 'react';
import logo from './logo.svg';
import './App.css';

{/*function App() {
    return (
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> 
  );
} */}

const  App = () =>{
  const message = 'This is my first variable in JSX'
  return(
  <div>
    <h1 className="text-center">Full Name</h1>
    <h2 className="text-center p-2 m-3">My first React App</h2>
    </div>
  )
}

export default App;
