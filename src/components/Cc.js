
import React from 'react';
import PropTypes from 'prop-types';

const Cc = props => {
	const { size, color } = props;
  return (
    
<svg width={size} height={size} viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" >
    
    
    
    
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
        <g id="file-type-icon-set" transform="translate(-298.000000, -687.000000)" fill={color}>
            <g id="Cc" transform="translate(298.000000, 687.000000)">
                <path d="M0,2 L0,2 L2,0 L2,48 L0,46 L48,46 L46,48 L46,0 L48,2 L0,2 Z M0,0 L48,0 L48,48 L0,48 L0,0 L0,0 Z" id="Shape" fillRule="nonzero"></path>
                <path d="M23.94,31.04 C22.98,31.49 21.42,31.79 19.92,31.79 C15.48,31.79 12.87,28.94 12.87,24.5 C12.87,19.64 15.84,17.06 19.95,17.06 C21.63,17.06 22.95,17.42 23.91,17.84 L24.72,14.9 C23.97,14.51 22.23,14 19.8,14 C13.62,14 9,18.02 9,24.68 C9,30.83 12.9,34.85 19.32,34.85 C21.75,34.85 23.67,34.4 24.54,33.95 L23.94,31.04 Z M37.29,31.37 C36.57,31.67 35.67,31.94 34.38,31.94 C31.86,31.94 29.91,30.23 29.91,27.23 C29.88,24.56 31.56,22.49 34.38,22.49 C35.7,22.49 36.57,22.79 37.17,23.06 L37.83,20.3 C36.99,19.91 35.61,19.61 34.26,19.61 C29.13,19.61 26.13,23.03 26.13,27.41 C26.13,31.94 29.1,34.85 33.66,34.85 C35.49,34.85 37.02,34.46 37.8,34.1 L37.29,31.37 Z"></path>
            </g>
        </g>
    </g>
</svg>
  );
};

Cc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Cc.defaultProps = {
  color: '#FFFFFF',
  size: '24',
};

export default Cc;