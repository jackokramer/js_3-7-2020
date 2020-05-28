const helloReact = ("h1", null, 'Hello React!')

const thingsToDo1 = React.createElement('ul', null,
 React.createElement("li", {style:{color:'green'}}, "Learn React!"),
 React.createElement('li', {style:{color:'blue'}}, "learn Django"),
 React.createElement('li', null, 'Run a 5k'), React.createElement('li', {style: {color: 'red'}}, 'rest and relax')
);

ReactDOM.render(helloReact, document.getElementById('root'));

ReactDOM.render(thingsToDo1, document.getElementById('things'));
