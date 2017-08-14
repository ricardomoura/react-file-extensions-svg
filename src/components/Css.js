
import React from 'react';
import PropTypes from 'prop-types';

const Css = props => {
	const { size, color } = props;
  return (
    <svg width={size} height={size}  xmlns="http://www.w3.org/2000/svg"><g fill={color} fill-rule="evenodd"><path d="M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z" fill-rule="nonzero"/><path d="M19.562 20.872L11.5 17.316v-1.161l8.062-4.027v1.948L14.01 16.65l5.553 2.282v1.94zm7.503-10.307l-4.425 11.87h-2.25l4.426-11.87h2.249zm1.088 8.68l5.75-2.363-5.75-2.665V12.2l8.347 4.17v1.201l-8.347 3.682v-2.009zM24 42.889a1 1 0 0 1 .075-.384.916.916 0 0 1 .208-.312 1.024 1.024 0 0 1 .705-.285.984.984 0 0 1 .695.286.984.984 0 0 1 .287.695.993.993 0 0 1-.286.695 1 1 0 0 1-.695.28 1.016 1.016 0 0 1-.706-.28.924.924 0 0 1-.208-.308.992.992 0 0 1-.075-.387zm7.995-4.375a.8.8 0 0 1-.14.143.323.323 0 0 1-.198.053.441.441 0 0 1-.24-.075 7.737 7.737 0 0 0-.28-.17 1.777 1.777 0 0 0-.942-.244c-.282.001-.53.052-.742.154a1.405 1.405 0 0 0-.53.438c-.14.191-.245.422-.314.693-.07.27-.105.577-.105.92 0 .355.038.671.114.948.076.278.185.51.329.7.143.188.316.33.52.428.203.098.433.146.689.146.255 0 .462-.03.62-.094.158-.063.292-.132.4-.208.108-.076.203-.145.283-.208a.426.426 0 0 1 .27-.094c.13 0 .227.05.292.15l.462.584c-.178.209-.371.383-.579.524a3.127 3.127 0 0 1-1.339.517 4.917 4.917 0 0 1-.709.051c-.411 0-.799-.076-1.163-.23a2.716 2.716 0 0 1-.952-.673 3.242 3.242 0 0 1-.644-1.082 4.181 4.181 0 0 1-.237-1.46c0-.49.07-.943.211-1.361.141-.418.348-.78.621-1.086a2.846 2.846 0 0 1 1.014-.718c.403-.173.867-.26 1.391-.26.498 0 .935.08 1.31.24a3.2 3.2 0 0 1 1.01.69l-.422.584zm5.473-.11a.428.428 0 0 1-.137.146.354.354 0 0 1-.181.043.573.573 0 0 1-.25-.066 17.084 17.084 0 0 0-.31-.146 2.828 2.828 0 0 0-.4-.146 1.915 1.915 0 0 0-.529-.065c-.316 0-.565.067-.748.201a.625.625 0 0 0-.272.527c0 .143.046.263.14.36.092.098.216.184.37.258.154.073.328.14.523.198.195.058.394.122.598.192.204.069.403.148.598.237.195.089.37.201.523.338.154.136.278.3.37.49.094.191.14.42.14.69 0 .32-.058.616-.175.887a1.95 1.95 0 0 1-.514.702 2.406 2.406 0 0 1-.835.461c-.331.11-.711.166-1.14.166-.23 0-.454-.02-.673-.062a3.97 3.97 0 0 1-.63-.172 3.49 3.49 0 0 1-.56-.26 2.713 2.713 0 0 1-.451-.325l.37-.611a.524.524 0 0 1 .169-.169.474.474 0 0 1 .247-.059c.1 0 .194.029.283.085.089.056.191.117.309.182.117.065.254.126.412.182.158.056.359.084.601.084.191 0 .355-.022.491-.068.137-.045.25-.105.338-.178a.671.671 0 0 0 .195-.257.77.77 0 0 0 .062-.303.54.54 0 0 0-.14-.383 1.223 1.223 0 0 0-.37-.26 3.578 3.578 0 0 0-.527-.198 17.396 17.396 0 0 1-.604-.192 5.592 5.592 0 0 1-.605-.244 2.06 2.06 0 0 1-.526-.354 1.603 1.603 0 0 1-.37-.526 1.837 1.837 0 0 1-.14-.755c0-.273.054-.532.162-.78a1.83 1.83 0 0 1 .478-.646c.21-.184.472-.332.786-.442.314-.11.677-.166 1.089-.166.46 0 .877.076 1.255.227.377.152.69.351.942.599l-.364.578zm5.681 0a.428.428 0 0 1-.136.146.354.354 0 0 1-.182.043.573.573 0 0 1-.25-.066 17.084 17.084 0 0 0-.31-.146 2.828 2.828 0 0 0-.4-.146 1.915 1.915 0 0 0-.529-.065c-.316 0-.565.067-.748.201a.625.625 0 0 0-.273.527c0 .143.047.263.14.36.093.098.217.184.37.258.155.073.329.14.524.198.195.058.394.122.598.192.204.069.403.148.598.237.195.089.37.201.523.338.154.136.278.3.37.49.094.191.14.42.14.69 0 .32-.058.616-.175.887a1.95 1.95 0 0 1-.514.702 2.406 2.406 0 0 1-.835.461c-.331.11-.711.166-1.14.166-.23 0-.454-.02-.673-.062a3.97 3.97 0 0 1-.63-.172 3.49 3.49 0 0 1-.56-.26 2.713 2.713 0 0 1-.452-.325l.371-.611a.524.524 0 0 1 .169-.169.474.474 0 0 1 .247-.059c.1 0 .194.029.283.085.089.056.191.117.309.182.117.065.254.126.412.182.158.056.359.084.602.084.19 0 .354-.022.49-.068.137-.045.25-.105.338-.178a.671.671 0 0 0 .195-.257.77.77 0 0 0 .062-.303.54.54 0 0 0-.14-.383 1.223 1.223 0 0 0-.37-.26 3.578 3.578 0 0 0-.527-.198 17.396 17.396 0 0 1-.604-.192 5.592 5.592 0 0 1-.605-.244 2.06 2.06 0 0 1-.526-.354 1.603 1.603 0 0 1-.37-.526 1.837 1.837 0 0 1-.14-.755c0-.273.054-.532.162-.78a1.83 1.83 0 0 1 .478-.646c.21-.184.472-.332.786-.442.314-.11.677-.166 1.089-.166.46 0 .877.076 1.255.227.377.152.69.351.942.599l-.364.578zM0 30h48v15.007A2.99 2.99 0 0 1 44.997 48H3.003A3.006 3.006 0 0 1 0 45.007V30z"/></g></svg>
  );
};

Css.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Css.defaultProps = {
  color: '#FFFFFF',
  size: '24',
};

export default Css;