import 'jsdom-global/register';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import ZestClick from '../../lib/components/triggerTypes/ZestClick';


describe('Component: ZestClick', () => {
  it('toggles animation on click', () => {
    const spy = expect.createSpy();
    const wrapper = mount(<ZestClick toggleAnimation={spy} />);
    wrapper.find(ZestClick).simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
