import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Dice from './Dice';

const diceTestRender = (
  <Dice dice={[1, 1, 1]} locked={[false, true, false]} handleClick={jest.fn} />
);

describe('simple smoke tests', () => {
  it('renders without crashing', () => {
    shallow(diceTestRender);
  });

  it('mounts without crashing', () => {
    mount(diceTestRender);
  });
});

describe('simple snapshots', () => {
  it('matches the shallow snapshot', () => {
    const wrapper = shallow(diceTestRender);
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });
});
