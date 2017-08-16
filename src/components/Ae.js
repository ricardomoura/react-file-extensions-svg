
import React from 'react';
import PropTypes from 'prop-types';

const Ae = props => {
	const { size, color } = props;
  return (
    
<svg width={size} height={size} viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" >
    
    
    
    
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="file-type-icon-set" transform="translate(-64.000000, -687.000000)" fill={color}>
            <g id="Ae" transform="translate(64.000000, 687.000000)">
                <path d="M0,2 L0,2 L2,0 L2,48 L0,46 L48,46 L46,48 L46,0 L48,2 L0,2 Z M0,0 L48,0 L48,48 L0,48 L0,0 L0,0 Z" id="Shape" fillRule="nonzero"></path>
                <path d="M18.97,28.49 L20.8,34.22 L24.76,34.22 L18.19,14 L13.48,14 L7,34.22 L10.81,34.22 L12.55,28.49 L18.97,28.49 Z M13.15,25.7 L14.71,20.72 C15.07,19.52 15.37,18.11 15.67,16.94 L15.73,16.94 C16.03,18.11 16.36,19.49 16.75,20.72 L18.34,25.7 L13.15,25.7 Z M39.43,27.95 C39.49,27.62 39.55,27.08 39.55,26.39 C39.55,23.18 37.99,19.28 33.25,19.28 C28.57,19.28 26.11,23.09 26.11,27.14 C26.11,31.61 28.9,34.52 33.64,34.52 C35.74,34.52 37.48,34.13 38.74,33.62 L38.2,31.07 C37.09,31.49 35.86,31.73 34.15,31.73 C31.81,31.73 29.74,30.59 29.65,27.95 L39.43,27.95 Z M29.65,25.37 C29.8,23.87 30.76,21.8 33.04,21.8 C35.5,21.8 36.1,24.02 36.07,25.37 L29.65,25.37 Z"></path>
            </g>
        </g>
    </g>
</svg>
  );
};

Ae.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Ae.defaultProps = {
  color: '#FFFFFF',
  size: '24',
};

export default Ae;