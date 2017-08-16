
import React from 'react';
import PropTypes from 'prop-types';

const Au = props => {
	const { size, color } = props;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill={color} ><path d="M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z" /><path d="M18.97 28.49l1.83 5.73h3.96L18.19 14h-4.71L7 34.22h3.81l1.74-5.73h6.42zm-5.82-2.79l1.56-4.98c.36-1.2.66-2.61.96-3.78h.06c.3 1.17.63 2.55 1.02 3.78l1.59 4.98h-5.19zm26.94-6.09H36.4v8.82c0 .42-.09.81-.21 1.14-.39.93-1.35 1.98-2.82 1.98-1.95 0-2.73-1.56-2.73-3.99v-7.95h-3.69v8.58c0 4.77 2.43 6.36 5.1 6.36 2.61 0 4.05-1.5 4.68-2.55h.06l.18 2.22h3.24c-.06-1.2-.12-2.64-.12-4.38V19.61z"/></g></svg>
  );
};

Au.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Au.defaultProps = {
  color: '#FFFFFF',
  size: '24',
};

export default Au;