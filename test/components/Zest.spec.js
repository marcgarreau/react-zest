import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import Zest from '../../lib/components/Zest';


describe('Component: Zest', () => {
  it('is initialized with the appropriate classNames', () => {
    const wrapper = shallow(<Zest />);
    expect(wrapper.find('.react-zest').length).toEqual(1);
  });

  it('is applies the appropriate classNames onClick', () => {
    const wrapper = shallow(<Zest />);
    wrapper.find('.react-zest').simulate('click');
    expect(wrapper.state().classNames).toEqual('react-zest zest-click');
    expect((wrapper).hasClass('zest-click')).toEqual(true);
  });
});
