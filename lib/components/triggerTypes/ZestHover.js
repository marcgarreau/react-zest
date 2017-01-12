/*eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
/*eslint-enable no-unused-vars*/


class ZestHover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classNames: 'react-zest'
    };
  }

  render() {
    return (
      <span
        onMouseEnter={() => { this.setState({ classNames: 'react-zest zest-hover' }); }}
        onMouseLeave={() => { this.setState({ classNames: 'react-zest' }); }}
        className={this.state.classNames}
      >
        {this.props.children}
      </span>
    );
  }
}

ZestHover.propTypes = {
  children: PropTypes.object
};

export default ZestHover;
