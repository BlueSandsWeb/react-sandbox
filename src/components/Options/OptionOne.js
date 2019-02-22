import React, { Component } from 'react';
import styled, { css } from "styled-components";

const Button = styled.button`
    background-color: #00cc22;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 3px;
    box-shadow: 0 2px 2px #323232;

    &:hover {
      transform: scale(1.1, 1.1);
    }
    &:active {
      transform: scale(.95, .95);
    }
`;

class OptionOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      pasword: ''
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="option-one">
        <form action="" onSubmit={this.props.handleSubmit} className="login-form">
          <input type="text" value={this.state.username} name='username' onChange={this.onChange} placeholder="Username" />
          <Button type="submit" className="btn">Login</Button>
        </form>
      </div>
    );
  }
}

export default OptionOne;