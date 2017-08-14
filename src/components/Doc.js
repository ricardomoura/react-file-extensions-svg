
import React from 'react';
import PropTypes from 'prop-types';

const Doc = props => {
	const { size, color } = props;
  return (
    <svg width={this.props.size} height={this.props.size}  xmlns="http://www.w3.org/2000/svg"><g fill={this.props.color} fill-rule="evenodd"><path d="M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z" fill-rule="nonzero"/><path d="M20.717 43.019a1 1 0 0 1 .075-.384.916.916 0 0 1 .208-.312 1.024 1.024 0 0 1 .705-.286.984.984 0 0 1 .696.286.984.984 0 0 1 .285.696.993.993 0 0 1-.286.695 1 1 0 0 1-.696.28 1.016 1.016 0 0 1-.704-.28.924.924 0 0 1-.208-.309.992.992 0 0 1-.075-.386zm8.002.884c-.209 0-.345-.098-.41-.293l-.13-.643a3.986 3.986 0 0 1-.435.422 2.753 2.753 0 0 1-.491.325 2.557 2.557 0 0 1-1.219.286c-.364 0-.698-.076-1.001-.227a2.23 2.23 0 0 1-.783-.66 3.162 3.162 0 0 1-.507-1.07 5.4 5.4 0 0 1-.179-1.456c0-.494.067-.953.201-1.378.135-.424.328-.792.579-1.105a2.7 2.7 0 0 1 .903-.73 2.609 2.609 0 0 1 1.183-.264c.373 0 .692.06.956.179s.5.278.709.477v-3.523H29.7v9.66h-.982zm-2.139-1.177c.334 0 .617-.07.852-.208.234-.139.454-.336.663-.592v-2.99a1.58 1.58 0 0 0-.595-.468 1.754 1.754 0 0 0-.692-.136c-.243 0-.463.045-.66.136a1.29 1.29 0 0 0-.5.413 2.022 2.022 0 0 0-.316.702 4.03 4.03 0 0 0-.11 1.005c0 .39.03.72.094.99.063.272.152.493.27.664.117.17.26.294.429.37.169.076.357.114.565.114zm7.403-5.596c.498 0 .95.08 1.355.24.405.16.75.388 1.036.683.287.294.507.654.663 1.079.157.424.235.899.235 1.423 0 .529-.078 1.005-.234 1.43a3.088 3.088 0 0 1-.663 1.086 2.88 2.88 0 0 1-1.037.689c-.405.16-.857.24-1.355.24a3.68 3.68 0 0 1-1.359-.24 2.906 2.906 0 0 1-1.043-.69 3.101 3.101 0 0 1-.67-1.085 4.073 4.073 0 0 1-.237-1.43c0-.524.08-.999.237-1.423.158-.425.382-.785.67-1.08a2.949 2.949 0 0 1 1.043-.682c.407-.16.86-.24 1.358-.24zm0 5.635c.554 0 .965-.186 1.231-.559.267-.373.4-.919.4-1.638 0-.72-.133-1.267-.4-1.645-.266-.377-.677-.565-1.231-.565-.564 0-.98.19-1.248.569-.27.379-.404.926-.404 1.641s.135 1.26.403 1.635c.27.375.685.562 1.248.562zm9.53-4.121a.8.8 0 0 1-.14.143.323.323 0 0 1-.198.052.441.441 0 0 1-.241-.075 7.737 7.737 0 0 0-.28-.169 1.777 1.777 0 0 0-.942-.244c-.282 0-.529.051-.741.153a1.405 1.405 0 0 0-.53.439c-.14.19-.246.421-.315.692-.07.271-.104.578-.104.92 0 .355.038.672.114.949.076.277.185.51.328.699.143.188.316.331.52.429.204.097.433.146.689.146.256 0 .463-.031.62-.094.159-.063.292-.132.4-.208.109-.076.203-.145.283-.208a.426.426 0 0 1 .27-.095c.13 0 .227.05.292.15l.462.585c-.178.208-.37.382-.578.523a3.127 3.127 0 0 1-1.34.517 4.917 4.917 0 0 1-.708.052c-.412 0-.8-.077-1.163-.23a2.716 2.716 0 0 1-.953-.674 3.242 3.242 0 0 1-.643-1.082 4.181 4.181 0 0 1-.238-1.459c0-.49.07-.944.212-1.362.14-.418.347-.78.62-1.085a2.846 2.846 0 0 1 1.014-.718c.404-.174.867-.26 1.392-.26.498 0 .934.08 1.31.24a3.2 3.2 0 0 1 1.01.689l-.422.585zM0 30h48v15.007A2.99 2.99 0 0 1 44.997 48H3.003A3.006 3.006 0 0 1 0 45.007V30zM5 7h1.954c.201 0 .37.048.505.143a.687.687 0 0 1 .273.384l2.126 7.478c.052.184.1.385.143.6.043.217.085.446.125.688.046-.242.097-.471.151-.687.055-.216.114-.417.178-.601l2.455-7.478a.818.818 0 0 1 .272-.363A.765.765 0 0 1 13.68 7h.683c.202 0 .369.048.501.143a.738.738 0 0 1 .277.384l2.438 7.478c.127.369.236.778.328 1.227.04-.224.082-.44.126-.648.043-.207.088-.4.134-.58l2.126-7.477a.697.697 0 0 1 .268-.371.812.812 0 0 1 .502-.156h1.824l-3.882 12.5h-2.1l-2.732-8.54c-.035-.11-.07-.228-.108-.355a8.145 8.145 0 0 1-.108-.407c-.035.145-.07.28-.108.407l-.108.354-2.758 8.541h-2.1L5 7z"/></g></svg>
  );
};

Doc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Doc.defaultProps = {
  color: '#FFFFFF',
  size: '24',
};

export default Doc;