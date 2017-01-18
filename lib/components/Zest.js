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

    this._animationProperties = {
      beacon: {
        'animation-duration': `${this.props.animationDuration || 300}ms`,
        'animation-name': 'beacon',
        'animation-timing-function': 'linear',
      },
      error: {
        'border-color': this.props.borderColor || this.props.color || '#C33917',
        'color': this.props.color || '#C33917',
        'animation-duration': `${this.props.animationDuration || 300}ms`,
        'animation-name': 'error',
        'animation-timing-function': 'linear',
      },
      wiggle: {
        'animation-duration': `${this.props.animationDuration || 1000}ms`,
        'animation-name': 'wiggle',
        'animation-timing-function': 'linear',
      },
    };

    this._animationRules = this._animationProperties[this.props.animationName];

    this.state = {
      classNames: 'react-zest'
    };
  }

  renderAnimationStyleTag() {
    if (!this.state.classNames.includes('zest-animate')) { return null; }
    return (
      <Style
        scopeSelector=".zest-animate > *"
        rules={this._animationRules}
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
          animationDuration={parseInt(this._animationRules['animation-duration'], 10)}
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
  animationDuration: PropTypes.number,
  animationName: PropTypes.string.isRequired,
  animationTrigger: PropTypes.string,
  borderColor: PropTypes.string,
  children: PropTypes.object,
  color: PropTypes.string,
};

export default Zest;
