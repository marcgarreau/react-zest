import 'jsdom-global/register';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import ZestHover from '../../lib/components/triggerTypes/ZestHover';


describe('Component: ZestHover', () => {
  it('toggles the animation trigger on hover', () => {
    const spy = expect.createSpy();
    const wrapper = mount(<ZestHover toggleAnimation={spy} />);
    wrapper.find(ZestHover).simulate('mouseEnter');
    expect(spy).toHaveBeenCalled();
  });
});
