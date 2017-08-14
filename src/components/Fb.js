
import React from 'react';
import PropTypes from 'prop-types';

const Fb = props => {
	const { size, color } = props;
  return (
    <svg width={this.props.size} height={this.props.size}  xmlns="http://www.w3.org/2000/svg"><g fill={this.props.color} fill-rule="evenodd"><path d="M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z" fill-rule="nonzero"/><path d="M10 34.3h3.69v-8.58h7.44v-3.03h-7.44v-5.58h7.98v-3.03H10V34.3zm17.67 0l.18-2.19h.06c1.05 1.8 2.73 2.52 4.62 2.52 3.3 0 6.63-2.61 6.63-7.86.03-4.44-2.52-7.41-6.09-7.41-2.19 0-3.78.93-4.68 2.34h-.06V13h-3.69v17.19c0 1.5-.06 3.12-.12 4.11h3.15zm.66-8.4c0-.36.06-.69.12-.96.42-1.62 1.77-2.7 3.27-2.7 2.46 0 3.69 2.1 3.69 4.68 0 2.94-1.41 4.8-3.72 4.8-1.59 0-2.88-1.11-3.27-2.58-.06-.27-.09-.57-.09-.87V25.9z"/></g></svg>
  );
};

Fb.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Fb.defaultProps = {
  color: '#FFFFFF',
  size: '24',
};

export default Fb;