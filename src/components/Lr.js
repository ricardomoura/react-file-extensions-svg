
import React from 'react';
import PropTypes from 'prop-types';

const Lr = props => {
	const { size, color } = props;
  return (
    <svg width={this.props.size} height={this.props.size}  xmlns="http://www.w3.org/2000/svg"><g fill={this.props.color} fill-rule="evenodd"><path d="M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z" fill-rule="nonzero"/><path d="M13 34.22h12v-3.09h-8.31V14H13v20.22zm15.64 0h3.69v-7.56c0-.42.06-.81.12-1.14.33-1.65 1.53-2.79 3.3-2.79.45 0 .78.06 1.08.12v-3.48c-.3-.06-.51-.09-.87-.09-1.56 0-3.27 1.05-3.99 3.12h-.12l-.12-2.79h-3.21c.09 1.32.12 2.73.12 4.71v9.9z"/></g></svg>
  );
};

Lr.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Lr.defaultProps = {
  color: '#FFFFFF',
  size: '24',
};

export default Lr;