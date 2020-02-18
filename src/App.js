import React, {Component} from 'react';
import Eve from './Components/Eve'
import Tamagotchi from './Components/Tamagotchi'
import Walle from './Components/Walle'
import './App.css';

class App extends Component{

constructor(props){
  super(props)
  // creating a state object that contains a key of "name" and a value of "Bob"
  this.state = {
    words: "",
    blahs: [],
    tama: []
  }
}

handleChange = (event) => {

//This is what Walle says
  var input = event.target.value
  if (input.length<0) {
  this.setState({ words: "" })
} else if (input.length>0) {
    this.setState({words: "I hear you saying " + input + ", right?"})
}

//This is what eve says
  var blaharray = ['b', 'l', 'a', 'h']

  var inputArray = event.target.value.split("")

  var index = 0
  var evesays = []
let j=0

for (let i=0; i<input.length; i++) {
    if (j>=4) {
        j=0
    }
    evesays[i] = blaharray[j]
    j++
}


this.setState({blahs: "I hear you saying " + evesays.join("") + " is that correct?"})


//This is what Tamagotchi says
var tamasays = ["Give me food", "Clean my poop", "I'm gonna die in two days", "Love me more", "Let's get wasted"]
var newArray = []
let t=0
for (let i=0; i<input.length; i++) {
    if (t>=4) {
        t=0
    }
    newArray = tamasays[t]
    t++
}
this.setState({tama: newArray})
}


render(){
  return(
    <div>
      <h1> Say Something! </h1>
      <input
        onChange={this.handleChange}
        placeholder="blah blah blah"
      />
      <br/>
      <br/>
      <Walle words={this.state.words} />
      <Eve words={this.state.blahs} />
      <Tamagotchi words={this.state.tama} />

    </div>
  )
}
}

export default App;
