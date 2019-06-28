import React, {Component} from 'react';
import data from "./data"
import Card from "./Components/Card"
import NavBar from "./Components/NavBar"
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      data:data,
      index:0
    }
    this.goForward = this.goForward.bind(this)
    this.goBackward = this.goBackward.bind(this)
  }

  goForward(){
    let {index, data} = this.state
    if(data[index + 1]){
      this.setState({
        index:this.state.index += 1
      })
    }
    else{
      console.log("You've reached the end of the array")
      this.setState({
        index:0
      })
    }
    
  }

  goBackward(){
    let {index, data} = this.state
    if(data[index -1]){
      this.setState({
        index:this.state.index -= 1
      })
    }
    else{
      console.log("You've reached the beginning of the array")
      this.setState({
        index:24
      })
    }
    
  }

  render(){
    return (
      <div className="App">
        hi
        <Card parentData = {this.state.data[this.state.index]}/>
        <NavBar goForwardFn = {this.goForward} goBackwardFn = {this.goBackward}/>
      </div>
    );
  }
}

export default App;
