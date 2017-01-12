/*eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
import ZestClick from './triggerTypes/ZestClick';
import ZestHover from './triggerTypes/ZestHover';
/*eslint-enable no-unused-vars*/
import '../../css/base.css';


class Zest extends Component {
  render() {
    switch (this.props.animationTrigger) {
    case 'hover':
      return <ZestHover {...this.props} />;
    default:
      return <ZestClick {...this.props} />;
    }
  }
}

Zest.propTypes = {
  children: PropTypes.object
};

export default Zest;
