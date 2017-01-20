import 'jsdom-global/register';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import ZestCustom from '../../lib/components/triggerTypes/ZestCustom';


describe('Component: ZestCustom', () => {
  const enableAnimation = expect.createSpy();
  const disableAnimation = expect.createSpy();
  const wrapper = mount(
    <ZestCustom
      animationName="glow"
      enableAnimation={enableAnimation}
      disableAnimation={disableAnimation}
    />
  );

  it('enables animation when trigger is true', (done) => {
    wrapper.setProps({ animationTrigger: true });
    done(); // required to execute the throttled function.
    expect(enableAnimation).toHaveBeenCalled();
  });

  it('disables animation when trigger is false', () => {
    wrapper.setProps({ animationTrigger: false });
    expect(disableAnimation).toHaveBeenCalled();
  });
});
