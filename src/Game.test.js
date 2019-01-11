import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Game from './Game';
import Die from './Die';
import { largeStraight } from './Rules';

describe('simple smoke tests', () => {
  it('renders without crashing', () => {
    shallow(<Game />);
  });

  it('mounts without crashing', () => {
    mount(<Game />);
  });
});

describe('simple snapshots', () => {
  it('matches the shallow snapshot', () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({ dice: [1, 1, 1, 1, 1, 1] });
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });
});

describe('functional testing', () => {
  it('locks die when clicked', () => {
    const wrapper = mount(<Game />);
    expect(wrapper.find('.Die-locked')).toHaveLength(0);
    let die = wrapper.find(Die).at(0);
    die.simulate('click');
    die = wrapper.find(Die).at(0);
    expect(die.props()).toHaveProperty('locked', true);
  });

  it('starts with dice already rolled', () => {
    const wrapper = mount(<Game />);
    let die = wrapper.find(Die).at(0);
    expect(die.props()).not.toHaveProperty('val', undefined);
  });
});

describe('rerolling tests', () => {
  var wrapper;
  var reroll;
  beforeEach(() => {
    // Initialize game with dice
    wrapper = mount(<Game />);
    reroll = wrapper.find('button.Game-reroll');
    // reroll.simulate('click');
  });

  it('should lock all dice after the second reroll', () => {
    expect(wrapper.find('button.Die-locked')).toHaveLength(0);
    reroll.simulate('click');
    reroll.simulate('click');
    expect(wrapper.find('button.Die-locked')).toHaveLength(5);
  });

  it('should disallow rerolls past the second even if dice have been unlocked', () => {
    reroll.simulate('click');
    reroll.simulate('click');
    const locked = wrapper.find('button.Die-locked');
    locked.at(0).simulate('click');
    locked.at(1).simulate('click');
    locked.at(2).simulate('click');
    expect(wrapper.find('button.Die-locked')).toHaveLength(2);
    const previous = wrapper.state().dice;
    reroll.simulate('click');
    expect(wrapper.state().dice).toEqual(previous);
  });
});

describe('score testing', () => {
  it('saves a score when clicked', () => {
    const wrapper = mount(<Game />);
    const ones = wrapper.find('[name="Ones"]');
    expect(wrapper.state().scores).toHaveProperty('ones', undefined);
    ones.simulate('click');
    expect(wrapper.state().scores.ones).not.toEqual(undefined);
  });

  it('does not do anything after a used rule is clicked', () => {
    const wrapper = mount(<Game />);
    const ones = wrapper.find('[name="Ones"]');
    ones.simulate('click');
    const previous = wrapper.state().dice;
    ones.simulate('click');
    // Checks that it does not reroll
    expect(wrapper.state().dice).toEqual(previous);
  });
});
