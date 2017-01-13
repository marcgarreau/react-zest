/*eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
/*eslint-enable no-unused-vars*/
import Radium, { Style } from 'radium';


class ZestClick extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classNames: 'react-zest'
    };
  }

  renderAnimation() {
    if (!this.state.classNames.includes('zest-animate')) { return null; }

    return (
      <Style
        scopeSelector=".zest-animate > *"
        rules={{
          animation: `${this.props.animationName} 1s linear`
        }}
      />
    );
  }

  handleClick() {
    this.setState({ classNames: 'react-zest zest-animate' });

    setTimeout(() => {
      this.setState({ classNames: 'react-zest' });
    }, 300);
  }

  render() {
    return (
      <span>
        {this.renderAnimation()}
        <span onClick={() => this.handleClick()} className={this.state.classNames}>
          {this.props.children}
        </span>
      </span>
    );
  }
}

ZestClick.propTypes = {
  children: PropTypes.object
};

export default ZestClick;
