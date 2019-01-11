import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 25px;
  display: inline-block;
  padding: 0.5em 0.8em;
  font-family: monospace;
  font-weight: bold;
  background-color: red;
  color: white;
  margin-right: 1em;

  &.Die-locked {
    background-color: darkred;
  }
`;

class Die extends Component {
  render() {
    return (
      <Button
        className={this.props.locked ? 'Die Die-locked' : 'Die'}
        onClick={() => this.props.handleClick(this.props.idx)}
      >
        {this.props.val}
      </Button>
    );
  }
}

export default Die;
