/*eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
import { Style } from 'radium';
import ZestClick from './triggerTypes/ZestClick';
import ZestCustom from './triggerTypes/ZestCustom';
import ZestHover from './triggerTypes/ZestHover';
/*eslint-enable no-unused-vars*/
import animations from '../animations';

import '../../css/base.css';


class Zest extends Component {
  constructor(props) {
    super(props);

    this._animateClass = `zest-animate-${Math.random().toString().slice(-6)}`;

    this.state = {
      classNames: 'react-zest'
    };
  }

  fetchAnimationRules() {
    const { animationCount, animationDuration, borderColor, color } = this.props;
    const animation = animations[this.props.animationName];

    if (animationDuration) { animation['animation-duration'] = animationDuration + 'ms'; }
    if (animationCount) { animation['animation-iteration-count'] = animationCount; }
    if (borderColor) { animation['border-color'] = borderColor; }
    if (color) { animation['color'] = color; }

    return animation;
  }

  renderAnimationStyleTag() {
    if (!this.state.classNames.includes(this._animateClass)) { return null; }
    return (
      <Style
        scopeSelector={`.${this._animateClass} > *`}
        rules={this.fetchAnimationRules()}
      />
    );
  }

  toggleAnimation() {
    const isAnimated = this.state.classNames.includes(this._animateClass);
    const newClassNames = isAnimated ? 'react-zest' : `react-zest ${this._animateClass}`;
    this.setState({ classNames: newClassNames });
  }

  enableAnimation() {
    this.setState({ classNames: `react-zest ${this._animateClass}` });
  }

  disableAnimation() {
    this.setState({ classNames: 'react-zest' });
  }

  renderTriggerComponent() {
    const animation = this.fetchAnimationRules();
    switch (this.props.animationTrigger) {
    case 'click':
      return (
        <ZestClick
          classNames={this.state.classNames}
          toggleAnimation={() => this.toggleAnimation()}
          animationDuration={parseInt(animation['animation-duration'], 10)}
          {...this.props}
        />
      );
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
        <ZestCustom
          classNames={this.state.classNames}
          enableAnimation={() => this.enableAnimation()}
          disableAnimation={() => this.disableAnimation()}
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
  animationCount: PropTypes.string,
  animationDuration: PropTypes.number,
  animationName: PropTypes.string.isRequired,
  animationTrigger: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  borderColor: PropTypes.string,
  children: PropTypes.object,
  color: PropTypes.string,
};

export default Zest;
