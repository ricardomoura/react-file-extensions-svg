
import React from 'react';
import PropTypes from 'prop-types';

const Pl = props => {
	const { size, color } = props;
  return (
    
<svg width={size} height={size} viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" >
    
    
    
    
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="file-type-icon-set" transform="translate(-376.000000, -765.000000)" fill={color}>
            <g id="Pl" transform="translate(376.000000, 765.000000)">
                <path d="M0,2 L0,2 L2,0 L2,48 L0,46 L48,46 L46,48 L46,0 L48,2 L0,2 Z M0,0 L48,0 L48,48 L0,48 L0,0 L0,0 Z" id="Shape" fillRule="nonzero"></path>
                <path d="M13,34.3 L16.66,34.3 L16.66,26.68 C17.14,26.77 17.77,26.8 18.46,26.8 C21.07,26.8 23.38,26.11 24.85,24.64 C25.99,23.56 26.59,21.97 26.59,20.05 C26.59,18.16 25.81,16.57 24.61,15.58 C23.32,14.5 21.34,13.93 18.64,13.93 C16.15,13.93 14.32,14.11 13,14.35 L13,34.3 Z M16.66,16.93 C17.05,16.84 17.77,16.75 18.79,16.75 C21.34,16.75 22.9,17.95 22.9,20.2 C22.9,22.57 21.22,23.92 18.46,23.92 C17.71,23.92 17.11,23.89 16.66,23.77 L16.66,16.93 Z M30.53,34.3 L34.25,34.3 L34.25,13 L30.53,13 L30.53,34.3 Z"></path>
            </g>
        </g>
    </g>
</svg>
  );
};

Pl.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Pl.defaultProps = {
  color: '#FFFFFF',
  size: '24',
};

export default Pl;