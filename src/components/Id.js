
import React from 'react';
import PropTypes from 'prop-types';

const Id = props => {
	const { size, color } = props;
  return (
    
<svg width={size} height={size} viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" >
    
    
    
    
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
        <g id="file-type-icon-set" transform="translate(-142.000000, -765.000000)" fill={color}>
            <g id="Id" transform="translate(142.000000, 765.000000)">
                <path d="M0,2 L0,2 L2,0 L2,48 L0,46 L48,46 L46,48 L46,0 L48,2 L0,2 Z M0,0 L48,0 L48,48 L0,48 L0,0 L0,0 Z" id="Shape" fillRule="nonzero"></path>
                <path d="M13,14.08 L13,34.3 L16.69,34.3 L16.69,14.08 L13,14.08 Z M30.55,13 L30.55,21.28 L30.49,21.28 C29.83,20.2 28.39,19.36 26.38,19.36 C22.87,19.36 19.81,22.27 19.84,27.16 C19.84,31.66 22.6,34.63 26.08,34.63 C28.21,34.63 29.98,33.61 30.85,31.99 L30.91,31.99 L31.06,34.3 L34.36,34.3 C34.3,33.31 34.24,31.69 34.24,30.19 L34.24,13 L30.55,13 Z M30.55,27.97 C30.55,28.36 30.52,28.72 30.43,29.05 C30.07,30.64 28.75,31.66 27.25,31.66 C24.91,31.66 23.59,29.71 23.59,27.04 C23.59,24.31 24.91,22.21 27.28,22.21 C28.96,22.21 30.13,23.38 30.46,24.82 C30.52,25.12 30.55,25.48 30.55,25.78 L30.55,27.97 Z"></path>
            </g>
        </g>
    </g>
</svg>
  );
};

Id.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Id.defaultProps = {
  color: '#FFFFFF',
  size: '24',
};

export default Id;