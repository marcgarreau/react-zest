/*eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
import ZestClick from './triggerTypes/ZestClick';
/*eslint-enable no-unused-vars*/
import '../../css/base.css';


class Zest extends Component {
  render() {
    return <ZestClick {...this.props} />;
  }
}

Zest.propTypes = {
  children: PropTypes.object
};

export default Zest;
