/*eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
/*eslint-enable no-unused-vars*/
import '../../css/base.css';


class Zest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classNames: 'react-zest'
    };
  }

  handleClick() {
    this.setState({ classNames: 'react-zest zest-click' });

    setTimeout(() => {
      this.setState({ classNames: 'react-zest' });
    }, 300);
  }

  render() {
    return (
      <span onClick={() => this.handleClick()} className={this.state.classNames}>
        {this.props.children}
      </span>
    );
  }
}

Zest.propTypes = {
  children: PropTypes.object
};

export default Zest;
