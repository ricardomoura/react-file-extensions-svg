
import React from 'react';
import PropTypes from 'prop-types';

const Ic = props => {
	const { size, color } = props;
  return (
    <svg width={this.props.size} height={this.props.size}  xmlns="http://www.w3.org/2000/svg"><g fill={this.props.color} fill-rule="evenodd"><path d="M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z" fill-rule="nonzero"/><path d="M15 14v20.22h3.69V14H15zm18 17.04c-.72.3-1.62.57-2.91.57-2.52 0-4.47-1.71-4.47-4.71-.03-2.67 1.65-4.74 4.47-4.74 1.32 0 2.19.3 2.79.57l.66-2.76c-.84-.39-2.22-.69-3.57-.69-5.13 0-8.13 3.42-8.13 7.8 0 4.53 2.97 7.44 7.53 7.44 1.83 0 3.36-.39 4.14-.75L33 31.04z"/></g></svg>
  );
};

Ic.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Ic.defaultProps = {
  color: '#FFFFFF',
  size: '24',
};

export default Ic;