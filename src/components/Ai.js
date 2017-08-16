
import React from 'react';
import PropTypes from 'prop-types';

const Ai = props => {
	const { size, color } = props;
  return (
    
<svg width={size} height={size} viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" >
    
    
    
    
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
        <g id="file-type-icon-set" transform="translate(-142.000000, -687.000000)" fill={color}>
            <g id="Ai" transform="translate(142.000000, 687.000000)">
                <path d="M0,2 L0,2 L2,0 L2,48 L0,46 L48,46 L46,48 L46,0 L48,2 L0,2 Z M0,0 L48,0 L48,48 L0,48 L0,0 L0,0 Z" id="Shape" fillRule="nonzero"></path>
                <path d="M22.97,28.97 L24.8,34.7 L28.76,34.7 L22.19,14.48 L17.48,14.48 L11,34.7 L14.81,34.7 L16.55,28.97 L22.97,28.97 Z M17.15,26.18 L18.71,21.2 C19.07,20 19.37,18.59 19.67,17.42 L19.73,17.42 C20.03,18.59 20.36,19.97 20.75,21.2 L22.34,26.18 L17.15,26.18 Z M35,34.7 L35,20.09 L31.28,20.09 L31.28,34.7 L35,34.7 Z M33.14,14 C31.91,14 31.07,14.87 31.07,16.01 C31.07,17.12 31.88,17.99 33.11,17.99 C34.4,17.99 35.21,17.12 35.21,16.01 C35.18,14.87 34.4,14 33.14,14 L33.14,14 Z"></path>
            </g>
        </g>
    </g>
</svg>
  );
};

Ai.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Ai.defaultProps = {
  color: '#FFFFFF',
  size: '24',
};

export default Ai;