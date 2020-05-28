import ReactDOM from 'react-dom';
import React from 'react';

import App from "./components/App"
import PropsEx from "./components/PropsEx"

//import App from './components/App';
//ReactDOM.render(<App/>, document.getElementById('root'));

const props ={
    name: "React",
    lang: "Angular",
    description: "Javascript library for builidng user interfaces"

}

const HelloReact = React.createElement('h1', {syle:{
}}, 'Hello React')

const runToTheHills = <h4>Run to the hills</h4>;

const paraGraph = (
    <div className="jumbotron">
        <h1 className="text-center p-4">Run over me...</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, illo? Pariatur vitae rem quod quae atque natus consequuntur exercitationem veritatis dolores esse velit illo doloribus, veniam beatae modi quibusdam nemo!</p>
    </div>
)

ReactDOM.render(<App/>, document.getElementById("app")) //leave this in the index since you're calling the other component from a diffrent file

ReactDOM.render(PropsEx(props), document.getElementById('prop'))

ReactDOM.render(HelloReact, document.getElementById('root'))

ReactDOM.render(runToTheHills, document.getElementById('vast'))

ReactDOM.render(paraGraph, document.getElementById('vast'));
