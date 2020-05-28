import ReactDOM from 'react-dom';
import React from 'react';

const HelloReact = React.createElement('h1', null, 'Hello React')

const runToTheHills = <h4>Run to the hills</h4>;

const paraGraph = (
    <div className="jumbotron">
        <h1>Run over me...</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, illo? Pariatur vitae rem quod quae atque natus consequuntur exercitationem veritatis dolores esse velit illo doloribus, veniam beatae modi quibusdam nemo!</p>
    </div>
)

ReactDOM.render(HelloReact, document.getElementById('root'))

ReactDOM.render(runToTheHills, document.getElementById('vast'))

ReactDOM.render(paraGraph, document.getElementById('vast'));