
import React from 'react';
import PropTypes from 'prop-types';

const Ps = props => {
	const { size, color } = props;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill={color} ><path d="M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z" /><path d="M11 34.37h3.66v-7.62c.48.09 1.11.12 1.8.12 2.61 0 4.92-.69 6.39-2.16 1.14-1.08 1.74-2.67 1.74-4.59 0-1.89-.78-3.48-1.98-4.47-1.29-1.08-3.27-1.65-5.97-1.65-2.49 0-4.32.18-5.64.42v19.95zM14.66 17c.39-.09 1.11-.18 2.13-.18 2.55 0 4.11 1.2 4.11 3.45 0 2.37-1.68 3.72-4.44 3.72-.75 0-1.35-.03-1.8-.15V17zm12.06 16.65c1.08.6 2.67 1.02 4.44 1.02 3.87 0 5.94-1.92 5.94-4.56-.03-2.16-1.26-3.51-3.9-4.47-1.86-.66-2.55-1.11-2.55-2.04 0-.9.72-1.53 2.04-1.53 1.29 0 2.46.48 3.09.84l.72-2.61c-.84-.45-2.25-.87-3.87-.87-3.39 0-5.52 2.01-5.52 4.59-.03 1.71 1.17 3.27 4.02 4.26 1.8.63 2.4 1.14 2.4 2.13 0 .96-.72 1.62-2.34 1.62-1.32 0-2.91-.54-3.75-1.05l-.72 2.67z"/></g></svg>
  );
};

Ps.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Ps.defaultProps = {
  color: '#FFFFFF',
  size: '24',
};

export default Ps;