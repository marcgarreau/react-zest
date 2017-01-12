import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import ZestHover from '../../lib/components/triggerTypes/ZestHover';


describe('Component: ZestHover', () => {
  it('is initialized with the appropriate class names', () => {
    const wrapper = shallow(<ZestHover />);
    expect(wrapper.find('.react-zest').length).toEqual(1);
    expect(wrapper.find('.zest-hover').length).toEqual(0);
  });

  it('is applies the appropriate class names on hover', () => {
    const wrapper = shallow(<ZestHover />);
    wrapper.find('.react-zest').simulate('mouseEnter');
    expect(wrapper.state().classNames).toEqual('react-zest zest-hover');
  });
});
