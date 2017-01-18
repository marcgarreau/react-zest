/*eslint-disable no-unused-vars*/
import React, { PropTypes } from 'react';
/*eslint-enable no-unused-vars*/


const ZestClick = props => {

  const handleClick = () => {
    props.toggleAnimation();
    setTimeout(() => {
      props.toggleAnimation();
    }, props.animationDuration);
  };

  return (
    <span onClick={() => handleClick()} className={props.classNames}>
      {props.children}
    </span>
  );
};

ZestClick.propTypes = {
  animationDuration: PropTypes.number,
  children: PropTypes.object,
  classNames: PropTypes.string,
};

export default ZestClick;
