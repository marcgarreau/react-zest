import React, { Component, PropTypes } from 'react';

import '../../css/base.css';

class Zest extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span className="zest-animate">
        {this.props.children}
      </span>
    );
  };
}

export default Zest;
