/*eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
/*eslint-enable no-unused-vars*/


class ZestHover extends Component {
  render() {
    console.log('hovering!');
    return (
      <span>
        {this.props.children}
      </span>
    );
  }
}

ZestHover.propTypes = {
  children: PropTypes.object
};

export default ZestHover;
