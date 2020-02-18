import React, {Component} from 'react';
import w from './w.jpg'
const Walle = (props) => {
  return (
    <div >
        <h1>WALL-E:</h1>
        <img src = {w}/>
        <p> {props.words}</p>

    </div>
  );
}

export default Walle;
