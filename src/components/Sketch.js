
import React from 'react';
import PropTypes from 'prop-types';

const Sketch = props => {
	const { size, color } = props;
  return (
    
<svg width={size} height={size} viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" >
    
    
    
    
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="file-type-icon-set" transform="translate(-688.000000, -765.000000)" fill={color}>
            <g id="sketch" transform="translate(688.000000, 765.000000)">
                <path d="M0,2 L0,2 L2,0 L2,48 L0,46 L48,46 L46,48 L46,0 L48,2 L0,2 Z M0,0 L48,0 L48,48 L0,48 L0,0 L0,0 Z" id="Shape" fillRule="nonzero"></path>
                <path d="M34.744703,13.2436634 L38.9947525,18.089901 L23.9981683,38.1070792 L9,18.089901 L13.2500495,13.2436634 L18.490198,11 L29.5045545,11 L34.744703,13.2436634 Z M37.1915842,18.2924752 L34.514802,14.6616832 L30.0818317,16.7687624 L33.2326238,21.344802 L37.1915842,18.2924752 Z M31.3170792,22.250396 L28.3174257,16.940297 L19.6773762,16.940297 L16.6776733,22.250396 L31.3170792,22.250396 Z M28.3053353,11.992335 L19.6443741,11.9911626 L15.6389109,13.7323267 L19.7059901,15.6426238 L28.2887624,15.6426238 L32.3558416,13.7323267 L28.3053353,11.992335 Z M13.4304455,14.6616832 L10.7537129,18.2924752 L14.7126238,21.344802 L17.8634158,16.7687624 L13.4304455,14.6616832 Z M12.3643564,21.2938614 L20.9630198,33.1278713 L14.9010396,23.2776238 L12.3643564,21.2938614 Z M17.029901,23.8682673 L23.9981683,36.2459901 L30.964901,23.8682673 L17.029901,23.8682673 Z M26.9822277,33.1278713 L35.5808911,21.2938614 L33.0442079,23.2776238 L26.9822277,33.1278713 Z"></path>
            </g>
        </g>
    </g>
</svg>
  );
};

Sketch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sketch.defaultProps = {
  color: '#FFFFFF',
  size: '24',
};

export default Sketch;