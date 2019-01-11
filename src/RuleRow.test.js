import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import RuleRow from './RuleRow';

const testRender = (
  <table>
    <tbody>
      <RuleRow />
    </tbody>
  </table>
);

describe('simple smoke tests', () => {
  it('renders without crashing', () => {
    shallow(testRender);
  });

  it('mounts without crashing', () => {
    mount(testRender);
  });
});

describe('simple snapshots', () => {
  it('matches the shallow snapshot', () => {
    const wrapper = shallow(testRender);
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });
});
