import React, { Component } from 'react';
import Die from './Die';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin: 1em;
`;

class Dice extends Component {
  render() {
    return (
      <StyledWrapper className="Dice">
        {this.props.dice.map((d, idx) => (
          <Die
            handleClick={this.props.handleClick}
            val={d}
            locked={this.props.locked[idx]}
            idx={idx}
            key={idx}
          />
        ))}
      </StyledWrapper>
    );
  }
}

export default Dice;
