import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Zest from '../../lib/components/Zest';
import ZestClick from '../../lib/components/triggerTypes/ZestClick';
import ZestCustom from '../../lib/components/triggerTypes/ZestCustom';
import ZestHover from '../../lib/components/triggerTypes/ZestHover';


describe('Component: Zest', () => {
  it('renders the ZestCustom component by default', () => {
    const wrapper = shallow(<Zest animationName="wiggle" />);
    expect(wrapper.find(ZestCustom).length).toEqual(1);
    expect(wrapper.find(ZestHover).length).toEqual(0);
  });

  it('conditionally renders the ZestClick component', () => {
    const wrapper = shallow(<Zest animationName="wiggle" animationTrigger="click" />);
    expect(wrapper.find(ZestClick).length).toEqual(1);
    expect(wrapper.find(ZestHover).length).toEqual(0);
  });

  it('conditionally renders the ZestHover component', () => {
    const wrapper = shallow(<Zest animationName="wiggle" animationTrigger="hover" />);
    expect(wrapper.find(ZestHover).length).toEqual(1);
    expect(wrapper.find(ZestClick).length).toEqual(0);
  });

  it('uses the default duration if one is not specified', () => {
    const wrapper = shallow(<Zest animationName="wiggle" animationTrigger="click" />);
    expect(wrapper.find(ZestClick).props().animationDuration).toEqual(1000);
  });

  it('allows users to specify animation duration', () => {
    const wrapper = shallow(<Zest animationName="wiggle" animationTrigger="click" animationDuration={300} />);
    expect(wrapper.find(ZestClick).props().animationDuration).toEqual(300);
  });
});
