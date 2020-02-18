import React, {Component} from 'react';
import e from './e.png'
const Eve = (props) => {
  return (
    <div >
        <h1>EVE:</h1>
        < img src = {e}/>
        <p> {props.words} </p>
    </div>
  )
}

export default Eve;
