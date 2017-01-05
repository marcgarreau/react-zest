import React, { Component, PropTypes } from 'react';

import '../../css/base.css';

class Zest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classNames: 'react-zest'
    }
  }

  handleClick() {
    this.setState({ classNames: 'react-zest zest-click' });

    setTimeout(() => {
      this.setState({ classNames: 'react-zest' });
    }, 500);
  }

  render() {
    return (
      <span onClick={() => this.handleClick()} className={this.state.classNames}>
        {this.props.children}
      </span>
    );
  };
}

export default Zest;
