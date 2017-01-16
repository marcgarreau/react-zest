/*eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
import { Style } from 'radium';
import ZestClick from './triggerTypes/ZestClick';
import ZestHover from './triggerTypes/ZestHover';
/*eslint-enable no-unused-vars*/

import '../../css/base.css';


class Zest extends Component {
  constructor(props) {
    super(props);

    this._defaultAnimationDurations = {
      'beacon': '300ms',
      'wiggle': '1s',
    };

    this.state = {
      classNames: 'react-zest'
    };
  }

  calculateAnimationDuration() {
    if (this.props.animationDuration) { return this.props.animationDuration; }

    return this._defaultAnimationDurations[this.props.animationName] || '300ms';
  }

  renderAnimationStyleTag() {
    if (!this.state.classNames.includes('zest-animate')) { return null; }

    return (
      <Style
        scopeSelector=".zest-animate > *"
        rules={{
          animation: `${this.props.animationName} ${this.calculateAnimationDuration()} linear`
        }}
      />
    );
  }

  toggleAnimation() {
    const isAnimated = this.state.classNames.includes('zest-animate');
    const newClassNames = isAnimated ? 'react-zest' : 'react-zest zest-animate';
    this.setState({ classNames: newClassNames });
  }

  renderTriggerComponent() {
    switch (this.props.animationTrigger) {
    case 'hover':
      return (
        <ZestHover
          classNames={this.state.classNames}
          toggleAnimation={() => this.toggleAnimation()}
          {...this.props}
        />
      );
    default:
      return (
        <ZestClick
          classNames={this.state.classNames}
          toggleAnimation={() => this.toggleAnimation()}
          {...this.props}
        />
      );
    }
  }

  render() {
    return (
      <span>
        {this.renderAnimationStyleTag()}
        {this.renderTriggerComponent()}
      </span>
    );
  }
}

Zest.propTypes = {
  children: PropTypes.object
};

export default Zest;
