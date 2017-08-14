
import React from 'react';
import PropTypes from 'prop-types';

const Fl = props => {
	const { size, color } = props;
  return (
    <svg width={size} height={size}  xmlns="http://www.w3.org/2000/svg"><g fill={color} fill-rule="evenodd"><path d="M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z" fill-rule="nonzero"/><path d="M14 34.3h3.69v-8.58h7.44v-3.03h-7.44v-5.58h7.98v-3.03H14V34.3zm16.12 0h3.72V13h-3.72v21.3z"/></g></svg>
  );
};

Fl.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Fl.defaultProps = {
  color: '#FFFFFF',
  size: '24',
};

export default Fl;