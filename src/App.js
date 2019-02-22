import React, { Component } from 'react';
import './App.css';
import TestClass from './components/TestClass/TestClass';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: 'This is from App.js',
      data: ''
    }
  }

  clickHandler = (input) => {
    this.setState({
      data: input
    });
    alert(this.state.data);  
  }

  render() {
    return (
      <div className="App">
        <TestClass text={this.state.text} data={this.state.data} clickHandler={this.clickHandler} />
      </div>
    );
  }
}

export default App;
