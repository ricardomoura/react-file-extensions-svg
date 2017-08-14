
import React from 'react';
import PropTypes from 'prop-types';

const Ai = props => {
	const { size, color } = props;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill={color} ><path d="M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z" fill-rule="nonzero"/><path d="M22.97 28.97l1.83 5.73h3.96l-6.57-20.22h-4.71L11 34.7h3.81l1.74-5.73h6.42zm-5.82-2.79l1.56-4.98c.36-1.2.66-2.61.96-3.78h.06c.3 1.17.63 2.55 1.02 3.78l1.59 4.98h-5.19zM35 34.7V20.09h-3.72V34.7H35zM33.14 14c-1.23 0-2.07.87-2.07 2.01 0 1.11.81 1.98 2.04 1.98 1.29 0 2.1-.87 2.1-1.98-.03-1.14-.81-2.01-2.07-2.01z"/></g></svg>
  );
};

Ai.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Ai.defaultProps = {
  color: '#FFFFFF',
  size: '24',
};

export default Ai;