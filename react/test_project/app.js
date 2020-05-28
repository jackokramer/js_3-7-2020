const myButton = React.createElement('button', null, 'Click Me');
console.log(JSON.stringify(myButton));

const heading = React.createElement('h1', null, "React Prac");
console.log(JSON.stringify(heading));

React.createElement('h1', null, "hellow");

React.createElement('p', null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus accusamus sit repudiandae aliquid ab earum a, minus voluptate accusantium nisi ratione et provident quis laborum eaque voluptas non molestias soluta.")
React.createElement('button', null, "click me")

ReactDOM.render(myButton, document.getElementById('app'))

ReactDOM.render(heading, document.getElementById('heading'))

console.log(React);
console.log(ReactDOM);