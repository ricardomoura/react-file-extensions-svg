'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flv = function Flv(props) {
  var size = props.size,
      color = props.color;

  return _react2.default.createElement(
    'svg',
    { width: size, height: size, viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
    _react2.default.createElement(
      'g',
      { fill: color },
      _react2.default.createElement('path', { d: 'M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z', 'fill-rule': 'nonzero' }),
      _react2.default.createElement('path', { d: 'M11 10h25v12.5H11V10zm11.303 8.724l4.061-2.031c.485-.243.49-.641 0-.886l-4.061-2.03c-.485-.243-.886.005-.886.56v3.827c0 .564.396.804.886.56zM27 42.71a1 1 0 0 1 .075-.383.916.916 0 0 1 .208-.313 1.024 1.024 0 0 1 .705-.286.984.984 0 0 1 .695.286.984.984 0 0 1 .287.696.993.993 0 0 1-.286.696 1 1 0 0 1-.695.28 1.016 1.016 0 0 1-.706-.28.924.924 0 0 1-.208-.31.992.992 0 0 1-.075-.386zm3.595.884v-5.46l-.579-.091a.615.615 0 0 1-.302-.13.34.34 0 0 1-.114-.273v-.657h.994v-.279c0-.355.056-.695.166-1.02.11-.326.28-.613.51-.862.23-.249.52-.448.872-.598.35-.15.766-.224 1.247-.224.395 0 .769.013 1.122.039.353.026.705.039 1.056.039h.904v9.516h-1.6v-8.398c-.23-.009-.453-.02-.672-.032a9.612 9.612 0 0 0-.556-.02c-.485 0-.856.135-1.111.406-.256.271-.384.656-.384 1.154v.28h1.58v1.143H32.2v5.467h-1.606zm11.075 0h-1.456l-2.651-6.669h1.332c.117 0 .216.028.296.085.08.056.135.127.165.214l1.288 3.562c.073.208.135.412.185.611.05.2.094.399.133.598.039-.2.083-.399.133-.598.05-.2.114-.403.192-.611l1.32-3.562a.44.44 0 0 1 .162-.214.465.465 0 0 1 .28-.085h1.267l-2.646 6.669zM0 30h48v15.007A2.99 2.99 0 0 1 44.997 48H3.003A3.006 3.006 0 0 1 0 45.007V30z' })
    )
  );
};

Flv.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Flv.defaultProps = {
  color: '#FFFFFF',
  size: '24'
};

exports.default = Flv;