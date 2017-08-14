
import React from 'react';
import PropTypes from 'prop-types';

const Mu = props => {
	const { size, color } = props;
  return (
    <svg width={this.props.size} height={this.props.size}  xmlns="http://www.w3.org/2000/svg"><g fill={this.props.color} fill-rule="evenodd"><path d="M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z" fill-rule="nonzero"/><path d="M23.792 34.22h3.564L26.198 14h-4.752l-2.763 8.1a99.469 99.469 0 0 0-1.99 7.05h-.089c-.505-2.25-1.129-4.65-1.842-7.02L12.15 14H7.337L6 34.22h3.416l.445-8.13c.149-2.76.268-5.97.357-8.61h.06c.534 2.52 1.247 5.28 2.019 7.86l2.673 8.64h2.822l2.911-8.76c.891-2.55 1.723-5.28 2.376-7.74h.09c-.03 2.73.118 5.88.237 8.49l.386 8.25zm18.09-14.61h-3.654v8.82c0 .42-.09.81-.208 1.14-.386.93-1.337 1.98-2.792 1.98-1.931 0-2.703-1.56-2.703-3.99v-7.95H28.87v8.58c0 4.77 2.406 6.36 5.05 6.36 2.584 0 4.01-1.5 4.633-2.55h.06l.178 2.22H42a85.73 85.73 0 0 1-.119-4.38V19.61z"/></g></svg>
  );
};

Mu.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Mu.defaultProps = {
  color: '#FFFFFF',
  size: '24',
};

export default Mu;