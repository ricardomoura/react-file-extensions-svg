
import React from 'react';
import PropTypes from 'prop-types';

const Fl = props => {
	const { size, color } = props;
  return (
    
<svg width={size} height={size} viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" >
    
    
    
    
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
        <g id="file-type-icon-set" transform="translate(-610.000000, -687.000000)" fill={color}>
            <g id="Fl" transform="translate(610.000000, 687.000000)">
                <path d="M0,2 L0,2 L2,0 L2,48 L0,46 L48,46 L46,48 L46,0 L48,2 L0,2 Z M0,0 L48,0 L48,48 L0,48 L0,0 L0,0 Z" id="Shape" fillRule="nonzero"></path>
                <path d="M14,34.3 L17.69,34.3 L17.69,25.72 L25.13,25.72 L25.13,22.69 L17.69,22.69 L17.69,17.11 L25.67,17.11 L25.67,14.08 L14,14.08 L14,34.3 Z M30.12,34.3 L33.84,34.3 L33.84,13 L30.12,13 L30.12,34.3 Z"></path>
            </g>
        </g>
    </g>
</svg>
  );
};

Fl.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Fl.defaultProps = {
  color: '#FFFFFF',
  size: '24',
};

export default Fl;