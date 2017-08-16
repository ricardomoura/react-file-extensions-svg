
import React from 'react';
import PropTypes from 'prop-types';

const En = props => {
	const { size, color } = props;
  return (
    
<svg width={size} height={size} viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" >
    
    
    
    
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="file-type-icon-set" transform="translate(-454.000000, -687.000000)" fill={color}>
            <g id="En" transform="translate(454.000000, 687.000000)">
                <path d="M0,2 L0,2 L2,0 L2,48 L0,46 L48,46 L46,48 L46,0 L48,2 L0,2 Z M0,0 L48,0 L48,48 L0,48 L0,0 L0,0 Z" id="Shape" fillRule="nonzero"></path>
                <path d="M21.31,22.25 L13.69,22.25 L13.69,17.03 L21.76,17.03 L21.76,14 L10,14 L10,34.22 L22.21,34.22 L22.21,31.19 L13.69,31.19 L13.69,25.25 L21.31,25.25 L21.31,22.25 Z M25.3,34.22 L29.02,34.22 L29.02,25.64 C29.02,25.22 29.05,24.77 29.17,24.44 C29.56,23.33 30.58,22.28 32.05,22.28 C34.06,22.28 34.84,23.87 34.84,25.97 L34.84,34.22 L38.53,34.22 L38.53,25.55 C38.53,20.93 35.89,19.28 33.34,19.28 C30.91,19.28 29.32,20.66 28.69,21.8 L28.6,21.8 L28.42,19.61 L25.18,19.61 C25.27,20.87 25.3,22.28 25.3,23.96 L25.3,34.22 Z"></path>
            </g>
        </g>
    </g>
</svg>
  );
};

En.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

En.defaultProps = {
  color: '#FFFFFF',
  size: '24',
};

export default En;