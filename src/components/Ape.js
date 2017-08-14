
import React from 'react';
import PropTypes from 'prop-types';

const Ape = props => {
	const { size, color } = props;
  return (
    <svg width={this.props.size} height={this.props.size}  xmlns="http://www.w3.org/2000/svg"><g fill={this.props.color} fill-rule="evenodd"><path d="M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z" fill-rule="nonzero"/><path d="M29.411 21.09V9l-10.496 1.496v9.721a3.32 3.32 0 0 0-1.064.184c-1.307.45-2.103 1.58-1.779 2.522.325.943 1.648 1.342 2.955.892.995-.343 1.694-1.078 1.828-1.826h.062v-5.903l2.765-.428v-1.913l-2.765.428v-1.636l6.492-.926v8.252a3.339 3.339 0 0 0-.994.184c-1.307.45-2.104 1.58-1.78 2.522.325.943 1.648 1.342 2.955.892 1.238-.426 2.018-1.461 1.821-2.37zM20 42.908a1 1 0 0 1 .075-.383.916.916 0 0 1 .208-.312 1.024 1.024 0 0 1 .705-.286.984.984 0 0 1 .695.286.984.984 0 0 1 .287.695.993.993 0 0 1-.286.696 1 1 0 0 1-.695.28 1.016 1.016 0 0 1-.706-.28.924.924 0 0 1-.208-.309.992.992 0 0 1-.075-.387zm8.535.884h-.722a.777.777 0 0 1-.357-.068c-.087-.045-.152-.137-.195-.276l-.143-.474a5.507 5.507 0 0 1-.498.4 3.02 3.02 0 0 1-.504.288 2.57 2.57 0 0 1-.552.176 3.324 3.324 0 0 1-.65.059 2.56 2.56 0 0 1-.78-.114 1.682 1.682 0 0 1-.614-.342 1.55 1.55 0 0 1-.4-.565 2.006 2.006 0 0 1-.143-.786c0-.252.066-.5.198-.745s.352-.466.66-.663c.308-.197.717-.36 1.229-.49.51-.13 1.146-.204 1.904-.221v-.39c0-.447-.094-.777-.283-.992-.188-.214-.462-.322-.822-.322-.26 0-.477.03-.65.091-.173.061-.324.13-.452.205-.128.076-.246.144-.354.205a.72.72 0 0 1-.358.091.465.465 0 0 1-.279-.084.665.665 0 0 1-.189-.209l-.292-.513c.767-.702 1.692-1.053 2.775-1.053.39 0 .738.064 1.044.192.305.128.564.305.776.533.213.227.374.5.485.816.11.316.166.662.166 1.04v4.211zm-3.12-1c.164 0 .316-.016.454-.046.14-.03.27-.076.394-.137a2.09 2.09 0 0 0 .357-.224c.115-.089.231-.194.348-.315v-1.124c-.468.021-.86.061-1.173.12a3.118 3.118 0 0 0-.758.224c-.19.091-.326.197-.406.319a.705.705 0 0 0-.12.396c0 .282.083.483.25.604.167.122.385.182.654.182zm4.699 3.178v-8.846h.982a.48.48 0 0 1 .266.071.334.334 0 0 1 .143.221l.13.617c.269-.307.577-.556.926-.747.35-.19.757-.286 1.225-.286.365 0 .697.076.998.227.301.152.561.372.78.66.22.288.388.644.507 1.066.12.423.179.907.179 1.453 0 .498-.067.96-.202 1.385a3.388 3.388 0 0 1-.575 1.105c-.249.312-.55.555-.903.73a2.629 2.629 0 0 1-1.187.264c-.377 0-.696-.057-.958-.172a2.347 2.347 0 0 1-.705-.478v2.73h-1.606zm3.12-7.703c-.334 0-.619.07-.855.212-.236.14-.456.339-.66.595v2.99c.183.225.38.382.595.47.215.09.445.134.693.134.242 0 .462-.045.66-.136a1.28 1.28 0 0 0 .5-.416c.136-.187.241-.422.315-.706a4.03 4.03 0 0 0 .11-1.004c0-.39-.03-.72-.094-.991a1.915 1.915 0 0 0-.27-.66 1.066 1.066 0 0 0-.425-.37 1.328 1.328 0 0 0-.569-.117zm6.987-1.248c.42 0 .808.068 1.16.202.354.134.658.33.914.588.256.258.455.574.598.95.143.374.215.802.215 1.283 0 .121-.006.222-.017.302a.484.484 0 0 1-.058.189.237.237 0 0 1-.114.097.485.485 0 0 1-.182.03h-4.121c.048.684.232 1.187.553 1.508.32.32.745.48 1.274.48.26 0 .484-.03.672-.09.189-.061.353-.128.494-.202.141-.074.265-.14.37-.202a.622.622 0 0 1 .31-.09c.065 0 .12.012.169.038a.373.373 0 0 1 .123.111l.468.585a2.676 2.676 0 0 1-.598.523c-.221.141-.452.254-.692.338-.24.085-.486.144-.735.179a5.26 5.26 0 0 1-.724.052c-.464 0-.895-.077-1.294-.23a2.896 2.896 0 0 1-1.04-.683 3.202 3.202 0 0 1-.696-1.118c-.169-.444-.253-.959-.253-1.544 0-.455.074-.883.221-1.284.147-.4.359-.75.634-1.046a2.984 2.984 0 0 1 1.007-.706c.397-.173.844-.26 1.343-.26zm.033 1.151c-.468 0-.834.132-1.098.396-.265.265-.434.64-.508 1.125h3.016a2 2 0 0 0-.084-.588 1.357 1.357 0 0 0-.26-.485 1.23 1.23 0 0 0-.442-.328 1.505 1.505 0 0 0-.624-.12zM0 30h48v15.007A2.99 2.99 0 0 1 44.997 48H3.003A3.006 3.006 0 0 1 0 45.007V30z"/></g></svg>
  );
};

Ape.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Ape.defaultProps = {
  color: '#FFFFFF',
  size: '24',
};

export default Ape;