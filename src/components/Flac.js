
import React from 'react';
import PropTypes from 'prop-types';

const Flac = props => {
	const { size, color } = props;
  return (
    <svg width={size} height={size}  xmlns="http://www.w3.org/2000/svg"><g fill={color} fill-rule="evenodd"><path d="M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z" fill-rule="nonzero"/><path d="M29.411 21.09V9l-10.496 1.496v9.721a3.32 3.32 0 0 0-1.064.184c-1.307.45-2.103 1.58-1.779 2.522.325.943 1.648 1.342 2.955.892.995-.343 1.694-1.078 1.828-1.826h.062v-5.903l2.765-.428v-1.913l-2.765.428v-1.636l6.492-.926v8.252a3.339 3.339 0 0 0-.994.184c-1.307.45-2.104 1.58-1.78 2.522.325.943 1.648 1.342 2.955.892 1.238-.426 2.018-1.461 1.821-2.37zM21 42.71a1 1 0 0 1 .075-.383.916.916 0 0 1 .208-.313 1.024 1.024 0 0 1 .705-.286.984.984 0 0 1 .695.286.984.984 0 0 1 .287.696.993.993 0 0 1-.286.696 1 1 0 0 1-.695.28 1.016 1.016 0 0 1-.706-.28.924.924 0 0 1-.208-.31.992.992 0 0 1-.075-.386zm3.595.884v-5.46l-.579-.091a.615.615 0 0 1-.302-.13.34.34 0 0 1-.114-.273v-.657h.994v-.279c0-.355.056-.695.166-1.02.11-.326.28-.613.51-.862.23-.249.52-.448.872-.598.35-.15.766-.224 1.248-.224.394 0 .768.013 1.12.039.354.026.706.039 1.057.039h.904v9.516h-1.6v-8.398c-.23-.009-.453-.02-.672-.032a9.612 9.612 0 0 0-.556-.02c-.485 0-.856.135-1.111.406-.256.271-.384.656-.384 1.154v.28h1.58v1.143H26.2v5.467h-1.605zm12.96 0h-.721a.777.777 0 0 1-.358-.068c-.086-.046-.151-.138-.194-.277l-.143-.474a5.507 5.507 0 0 1-.498.4 3.02 3.02 0 0 1-.503.289 2.57 2.57 0 0 1-.553.175 3.324 3.324 0 0 1-.65.059 2.56 2.56 0 0 1-.78-.114 1.682 1.682 0 0 1-.614-.341 1.55 1.55 0 0 1-.4-.566 2.006 2.006 0 0 1-.143-.786c0-.251.066-.5.198-.744.132-.245.352-.466.66-.663.308-.197.717-.361 1.228-.491.512-.13 1.147-.204 1.905-.221v-.39c0-.446-.094-.777-.283-.991-.188-.215-.462-.322-.822-.322-.26 0-.477.03-.65.091-.173.06-.324.129-.452.205-.128.076-.246.144-.354.204a.72.72 0 0 1-.357.091.465.465 0 0 1-.28-.084.665.665 0 0 1-.188-.208l-.293-.514c.767-.702 1.692-1.053 2.776-1.053.39 0 .737.064 1.043.192.305.128.564.306.777.533.212.228.373.5.484.816.11.316.166.663.166 1.04v4.212zm-3.12-1.001c.165 0 .317-.015.456-.046.138-.03.27-.075.393-.136a2.09 2.09 0 0 0 .357-.224c.115-.09.231-.194.348-.316v-1.124c-.468.022-.86.062-1.173.12a3.118 3.118 0 0 0-.758.225c-.19.09-.326.197-.406.318a.705.705 0 0 0-.12.397c0 .281.083.483.25.604.167.121.385.182.654.182zm9.386-4.258a.8.8 0 0 1-.14.143.323.323 0 0 1-.197.053.441.441 0 0 1-.241-.075 7.737 7.737 0 0 0-.28-.17 1.777 1.777 0 0 0-.943-.244c-.28.001-.528.052-.74.154a1.405 1.405 0 0 0-.53.439c-.14.19-.246.42-.315.692-.07.27-.104.577-.104.92 0 .355.038.671.114.949.076.277.185.51.328.698.143.189.316.332.52.43.204.097.433.145.689.145.256 0 .463-.03.62-.094.159-.063.292-.132.4-.208.109-.076.203-.145.283-.208a.426.426 0 0 1 .27-.094c.13 0 .227.05.292.15l.462.584c-.178.209-.37.383-.578.524a3.127 3.127 0 0 1-1.34.517 4.917 4.917 0 0 1-.708.051c-.412 0-.8-.076-1.163-.23a2.716 2.716 0 0 1-.953-.673 3.242 3.242 0 0 1-.643-1.082 4.181 4.181 0 0 1-.237-1.46c0-.49.07-.943.21-1.361.142-.418.348-.78.622-1.086a2.846 2.846 0 0 1 1.014-.718c.403-.173.866-.26 1.39-.26.499 0 .935.08 1.31.24a3.2 3.2 0 0 1 1.011.69l-.422.585zM0 30h48v15.007A2.99 2.99 0 0 1 44.997 48H3.003A3.006 3.006 0 0 1 0 45.007V30z"/></g></svg>
  );
};

Flac.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Flac.defaultProps = {
  color: '#FFFFFF',
  size: '24',
};

export default Flac;