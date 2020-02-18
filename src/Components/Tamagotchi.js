import React, {Component} from 'react';
import t from './t.jpg'
const Tamagotchi = (props) => {
  return (
    <div >

        <h1>TAMAGOTCHI:</h1>
        <img src = {t}/>
        <p> {props.words} </p>
    </div>
  );
}

export default Tamagotchi;
