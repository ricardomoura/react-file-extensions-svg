
import React from 'react';
import PropTypes from 'prop-types';

const Dw = props => {
	const { size, color } = props;
  return (
    <svg width={this.props.size} height={this.props.size}  xmlns="http://www.w3.org/2000/svg"><g fill={this.props.color} fill-rule="evenodd"><path d="M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z" fill-rule="nonzero"/><path d="M6 34.31c1.138.15 2.675.27 4.723.27 3.728 0 6.772-.93 8.679-2.76 1.82-1.74 2.987-4.44 2.987-8.04 0-3.45-1.138-5.85-2.987-7.44-1.764-1.56-4.24-2.34-7.825-2.34-2.077 0-4.04.15-5.577.42v19.89zm3.5-17.22c.484-.12 1.28-.21 2.39-.21 4.382 0 6.829 2.55 6.8 7.02 0 5.13-2.703 7.77-7.255 7.74-.712 0-1.451 0-1.935-.09V17.09zm12.756 2.67l4.098 14.61h3.272l1.764-5.94c.398-1.44.768-2.88 1.053-4.68h.057c.313 1.77.626 3.15 1.053 4.68l1.65 5.94h3.244L42.8 19.76h-3.443l-1.536 6.48c-.37 1.71-.683 3.3-.91 4.89h-.058a99.231 99.231 0 0 0-1.11-4.89l-1.735-6.48h-2.846l-1.792 6.66c-.398 1.5-.854 3.12-1.138 4.71h-.057c-.256-1.59-.57-3.18-.882-4.74l-1.451-6.63h-3.586z"/></g></svg>
  );
};

Dw.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Dw.defaultProps = {
  color: '#FFFFFF',
  size: '24',
};

export default Dw;