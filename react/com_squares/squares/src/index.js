import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Bigbox = React.createElement("div", {style:{color:'blue'}, className="bluebox"}, "White on Blue");
  React.createElement("div", {style:{color:'red'}, className="redbox"},"Blue on Red");
  React.createElement("div", {style:{color:'pink'}, className="pinkbox"}, "Green on pink");
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

console.log(React);
console.log(ReactDOM);
