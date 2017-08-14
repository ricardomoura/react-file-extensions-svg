
import React from 'react';
import PropTypes from 'prop-types';

const Zip7z = props => {
  return (
    <svg width={this.props.width} height={this.props.height}  xmlns="http://www.w3.org/2000/svg"><g fill={this.props.color} fill-rule="evenodd"><path d="M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z" fill-rule="nonzero"/><path d="M31 2h3v2h-3V2zm2 2h3v2h-3V4zm-2 2h3v2h-3V6zm2 2h3v2h-3V8zm-2 2h3v2h-3v-2zm2 2h3v2h-3v-2zm-2 2h3v2h-3v-2zm2 2h3v2h-3v-2zm-2 2h3v2h-3v-2zM27.906 43.025a1 1 0 0 1 .075-.383.916.916 0 0 1 .208-.313 1.024 1.024 0 0 1 .705-.285.984.984 0 0 1 .696.286.984.984 0 0 1 .285.695.993.993 0 0 1-.286.696 1 1 0 0 1-.696.28 1.016 1.016 0 0 1-.704-.28.924.924 0 0 1-.208-.31.992.992 0 0 1-.075-.386zm9.575-8.515v.696c0 .208-.023.375-.069.503-.045.128-.09.235-.133.322l-3.556 7.332a1.1 1.1 0 0 1-.312.387c-.134.106-.316.159-.546.159h-1.163l3.64-7.182c.152-.295.32-.549.507-.761h-4.498a.356.356 0 0 1-.26-.11.356.356 0 0 1-.11-.26V34.51h6.5zm6.096 3.393a.9.9 0 0 1-.061.328c-.041.106-.09.196-.146.27l-3.172 4.173h3.288v1.235h-5.154v-.67a.94.94 0 0 1 .215-.553l3.198-4.218H38.52V37.24h5.056v.663zM0 30h48v15.007A2.99 2.99 0 0 1 44.997 48H3.003A3.006 3.006 0 0 1 0 45.007V30z"/></g></svg>
  );
};

Zip7z.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Zip7z.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Zip7z;