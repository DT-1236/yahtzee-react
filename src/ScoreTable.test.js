import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import ScoreTable from './ScoreTable';

const testRender = (
  <ScoreTable
    scores={{
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined
      }
    }}
  />
);

describe('simple smoke tests', () => {
  it('renders without crashing', () => {
    shallow(testRender);
  });

  //   it('mounts without crashing', () => {
  //     mount(<ScoreTable scores={{ scores: {} }} />);
  //   });
});

describe('simple snapshots', () => {
  it('matches the shallow snapshot', () => {
    const wrapper = shallow(testRender);
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });
});
