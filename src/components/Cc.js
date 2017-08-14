
import React from 'react';
import PropTypes from 'prop-types';

const Cc = props => {
  return (
    <svg width={this.props.width} height={this.props.height}  xmlns="http://www.w3.org/2000/svg"><g fill={this.props.color} fill-rule="evenodd"><path d="M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z" fill-rule="nonzero"/><path d="M23.94 31.04c-.96.45-2.52.75-4.02.75-4.44 0-7.05-2.85-7.05-7.29 0-4.86 2.97-7.44 7.08-7.44 1.68 0 3 .36 3.96.78l.81-2.94c-.75-.39-2.49-.9-4.92-.9C13.62 14 9 18.02 9 24.68c0 6.15 3.9 10.17 10.32 10.17 2.43 0 4.35-.45 5.22-.9l-.6-2.91zm13.35.33c-.72.3-1.62.57-2.91.57-2.52 0-4.47-1.71-4.47-4.71-.03-2.67 1.65-4.74 4.47-4.74 1.32 0 2.19.3 2.79.57l.66-2.76c-.84-.39-2.22-.69-3.57-.69-5.13 0-8.13 3.42-8.13 7.8 0 4.53 2.97 7.44 7.53 7.44 1.83 0 3.36-.39 4.14-.75l-.51-2.73z"/></g></svg>
  );
};

Cc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Cc.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Cc;