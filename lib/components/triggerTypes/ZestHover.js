/*eslint-disable no-unused-vars*/
import React, { PropTypes } from 'react';
/*eslint-enable no-unused-vars*/


const ZestHover = props => {
  return (
    <span
      onMouseEnter={() => props.toggleAnimation() }
      onMouseLeave={() => props.toggleAnimation() }
      className={props.classNames}
    >
      {props.children}
    </span>
  );
}

ZestHover.propTypes = {
  children: PropTypes.object
};

export default ZestHover;
