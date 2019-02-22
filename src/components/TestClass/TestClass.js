import React, { Component } from 'react';
import OptionOne from '../Options/OptionOne.js';
import OptionTwo from '../Options/OptionTwo';

class TestClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      loggedIn: true
    })
  }

  logout = (e) => {
    e.preventDefault();
    this.setState({
      loggedIn: false
    })
  }

  render() {
    return (
      <>
        {!this.state.loggedIn ? <OptionOne loggedIn={this.state.loggedIn} handleSubmit={this.handleSubmit}/> : <OptionTwo logout={this.logout} />}
      </>
    );
  }
}

export default TestClass;