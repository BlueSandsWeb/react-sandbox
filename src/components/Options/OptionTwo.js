import React, { Component } from 'react';

class OptionTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h1 className="option2">Option 2</h1>
        <button onClick={this.props.logout} >Log Out</button>
      </div>
    );
  }
}

export default OptionTwo;