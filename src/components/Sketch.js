
import React from 'react';
import PropTypes from 'prop-types';

const Sketch = props => {
  return (
    <svg width={this.props.width} height={this.props.height}  xmlns="http://www.w3.org/2000/svg"><g fill={this.props.color} fill-rule="evenodd"><path d="M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z" fill-rule="nonzero"/><path d="M34.745 13.244l4.25 4.846-14.997 20.017L9 18.09l4.25-4.846L18.49 11h11.015l5.24 2.244zm2.447 5.048l-2.677-3.63-4.433 2.107 3.15 4.576 3.96-3.053zm-5.875 3.958l-3-5.31h-8.64l-3 5.31h14.64zm-3.012-10.258h-8.66l-4.006 1.74 4.067 1.91h8.583l4.067-1.91-4.05-1.74zm-14.875 2.67l-2.676 3.63 3.959 3.053 3.15-4.576-4.433-2.107zm-1.066 6.632l8.599 11.834-6.062-9.85-2.537-1.984zm4.666 2.574l6.968 12.378 6.967-12.378H17.03zm9.952 9.26l8.599-11.834-2.537 1.984-6.062 9.85z"/></g></svg>
  );
};

Sketch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sketch.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Sketch;