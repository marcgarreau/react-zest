/*eslint-disable no-unused-vars*/
import React, { PropTypes } from 'react';
/*eslint-enable no-unused-vars*/


const ZestClick = props => {
  const handleClick = () => {
    props.toggleAnimation();

    setTimeout(() => {
      props.toggleAnimation();
    }, 300);
  };

  return (
    <span onClick={() => handleClick()} className={props.classNames}>
      {props.children}
    </span>
  );
};

ZestClick.propTypes = {
  children: PropTypes.object
};

export default ZestClick;
