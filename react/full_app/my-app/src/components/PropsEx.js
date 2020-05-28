import React from 'react';

import Title from "./Title";
import "./App.css";

const PropsEx = (props) => {
    console.log(props);
    return (
        <div className="jumbotron">
            <h1>Hello {props.name}</h1>
    <p>{props.lang} is {props.description}</p>
        </div>
    );
}

export default PropsEx