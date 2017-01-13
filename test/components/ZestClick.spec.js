import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import ZestClick from '../../lib/components/triggerTypes/ZestClick';


describe('Component: ZestClick', () => {
  xit('toggles animation on click', () => {
    const spy = expect.createSpy();
    const wrapper = mount(<ZestClick toggleAnimation={spy} />);
    wrapper.find(ZestClick).simulate('click');
    expect(spy).toHaveBeenCalled();
  });
  
  // it('is initialized with the appropriate class names', () => {
  //   const wrapper = shallow(<ZestClick />);
  //   expect(wrapper.find('.react-zest').length).toEqual(1);
  //   expect(wrapper.find('.zest-click').length).toEqual(0);
  // });
  //
  // it('is applies the appropriate class names on click', () => {
  //   const wrapper = shallow(<ZestClick />);
  //   wrapper.find('.react-zest').simulate('click');
  //   expect(wrapper.state().classNames).toEqual('react-zest zest-click');
  // });
});
