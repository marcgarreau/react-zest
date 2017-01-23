/*eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
import { Style } from 'radium';
import ZestClick from './triggerTypes/ZestClick';
import ZestCustom from './triggerTypes/ZestCustom';
import ZestHover from './triggerTypes/ZestHover';
/*eslint-enable no-unused-vars*/

import '../../css/base.css';


class Zest extends Component {
  constructor(props) {
    super(props);

    this._animationProperties = {
      beacon: {
        'animation-duration': `${this.props.animationDuration || 300}ms`,
        'animation-iteration-count': this.props.animationCount || '1',
        'animation-name': 'beacon',
        'animation-timing-function': 'linear',
      },
      pulse: {
        'border-color': this.props.borderColor || this.props.color || '#C33917',
        'color': this.props.color || '#C33917',
        'animation-duration': `${this.props.animationDuration || 3000}ms`,
        'animation-iteration-count': this.props.animationCount || 'infinite',
        'animation-name': 'pulse',
        'animation-timing-function': 'linear',
      },
      wiggle: {
        'animation-duration': `${this.props.animationDuration || 1000}ms`,
        'animation-iteration-count': this.props.animationCount || '1',
        'animation-name': 'wiggle',
        'animation-timing-function': 'linear',
      },
    };

    this.state = {
      classNames: 'react-zest'
    };
  }

  fetchAnimationRules() {
    return this._animationProperties[this.props.animationName];
  }

  renderAnimationStyleTag() {
    if (!this.state.classNames.includes('zest-animate')) { return null; }
    return (
      <Style
        scopeSelector=".zest-animate > *"
        rules={this.fetchAnimationRules()}
      />
    );
  }

  toggleAnimation() {
    const isAnimated = this.state.classNames.includes('zest-animate');
    const newClassNames = isAnimated ? 'react-zest' : 'react-zest zest-animate';
    this.setState({ classNames: newClassNames });
  }

  enableAnimation() {
    this.setState({ classNames: 'react-zest zest-animate' });
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
