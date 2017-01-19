/*eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
/*eslint-enable no-unused-vars*/
import throttle from '../../utils/throttle.js';


class ZestCustom extends Component {
  constructor(props) {
    super(props);

    this.toggleAnimation = throttle(this.toggleAnimation.bind(this), 500);
  }

  toggleAnimation() {
    const { animationTrigger, enableAnimation, disableAnimation } = this.props;
    animationTrigger ? enableAnimation() : disableAnimation();
  }

  componentWillUpdate() {
    this.toggleAnimation();
  }

  render() {
    return (
      <span className={this.props.classNames}>
        {this.props.children}
      </span>
    );
  }
}

ZestCustom.propTypes = {
  animationTrigger: PropTypes.bool,
  children: PropTypes.object,
  classNames: PropTypes.string,
  enableAnimation: PropTypes.func,
  disableAnimation: PropTypes.func,
  toggleAnimation: PropTypes.func,
};

export default ZestCustom;
