import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Zest from '../../lib/components/Zest';
import ZestClick from '../../lib/components/triggerTypes/ZestClick';
import ZestHover from '../../lib/components/triggerTypes/ZestHover';


describe('Component: Zest', () => {
  it('renders the ZestClick component by default', () => {
    const wrapper = shallow(<Zest />);
    expect(wrapper.find(ZestClick).length).toEqual(1);
    expect(wrapper.find(ZestHover).length).toEqual(0);
  });

  it('conditionally renders the ZestClick component', () => {
    const wrapper = shallow(<Zest animationTrigger="click" />);
    expect(wrapper.find(ZestClick).length).toEqual(1);
    expect(wrapper.find(ZestHover).length).toEqual(0);
  });

  it('conditionally renders the ZestHover component', () => {
    const wrapper = shallow(<Zest animationTrigger="hover" />);
    expect(wrapper.find(ZestHover).length).toEqual(1);
    expect(wrapper.find(ZestClick).length).toEqual(0);
  });
});
