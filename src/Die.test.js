import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Die from './Die';

describe('simple smoke tests', () => {
  it('renders without crashing', () => {
    shallow(<Die />);
  });

  it('mounts without crashing', () => {
    mount(<Die />);
  });
});

describe('simple snapshots', () => {
  it('matches the shallow snapshot', () => {
    const wrapper = shallow(<Die />);
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });
});

describe('locked and unlocked snapshots', () => {
  it('matches the locked snapshot', () => {
    const wrapper = shallow(<Die locked />);
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });

  it('matches the unlocked snapshot', () => {
    const wrapper = shallow(<Die locked={false} />);
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });
});
