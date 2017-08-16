
import React from 'react';
import PropTypes from 'prop-types';

const Au = props => {
	const { size, color } = props;
  return (
    
<svg width={size} height={size} viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" >
    
    
    
    
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
        <g id="file-type-icon-set" transform="translate(-220.000000, -687.000000)" fill={color}>
            <g id="Au" transform="translate(220.000000, 687.000000)">
                <path d="M0,2 L0,2 L2,0 L2,48 L0,46 L48,46 L46,48 L46,0 L48,2 L0,2 Z M0,0 L48,0 L48,48 L0,48 L0,0 L0,0 Z" id="Shape" fillRule="nonzero"></path>
                <path d="M18.97,28.49 L20.8,34.22 L24.76,34.22 L18.19,14 L13.48,14 L7,34.22 L10.81,34.22 L12.55,28.49 L18.97,28.49 Z M13.15,25.7 L14.71,20.72 C15.07,19.52 15.37,18.11 15.67,16.94 L15.73,16.94 C16.03,18.11 16.36,19.49 16.75,20.72 L18.34,25.7 L13.15,25.7 Z M40.09,19.61 L36.4,19.61 L36.4,28.43 C36.4,28.85 36.31,29.24 36.19,29.57 C35.8,30.5 34.84,31.55 33.37,31.55 C31.42,31.55 30.64,29.99 30.64,27.56 L30.64,19.61 L26.95,19.61 L26.95,28.19 C26.95,32.96 29.38,34.55 32.05,34.55 C34.66,34.55 36.1,33.05 36.73,32 L36.79,32 L36.97,34.22 L40.21,34.22 C40.15,33.02 40.09,31.58 40.09,29.84 L40.09,19.61 Z"></path>
            </g>
        </g>
    </g>
</svg>
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