'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Zip = function Zip(props) {
  var size = props.size,
      color = props.color;

  return _react2.default.createElement(
    'svg',
    { width: undefined.props.size, height: undefined.props.size, xmlns: 'http://www.w3.org/2000/svg' },
    _react2.default.createElement(
      'g',
      { fill: undefined.props.color, 'fill-rule': 'evenodd' },
      _react2.default.createElement('path', { d: 'M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z', 'fill-rule': 'nonzero' }),
      _react2.default.createElement('path', { d: 'M31 2h3v2h-3V2zm2 2h3v2h-3V4zm-2 2h3v2h-3V6zm2 2h3v2h-3V8zm-2 2h3v2h-3v-2zm2 2h3v2h-3v-2zm-2 2h3v2h-3v-2zm2 2h3v2h-3v-2zm-2 2h3v2h-3v-2zM25 42.755a1 1 0 0 1 .075-.383.916.916 0 0 1 .208-.312 1.024 1.024 0 0 1 .705-.286.984.984 0 0 1 .695.286.984.984 0 0 1 .287.696.993.993 0 0 1-.286.696 1 1 0 0 1-.695.28 1.016 1.016 0 0 1-.706-.281.924.924 0 0 1-.208-.309.992.992 0 0 1-.075-.387zm8.132-5.122a.9.9 0 0 1-.062.329c-.041.106-.09.196-.147.27l-3.172 4.172h3.29v1.235h-5.155v-.669a.94.94 0 0 1 .215-.553l3.198-4.218h-3.224v-1.228h5.057v.663zm2.99-.663v6.67h-1.606v-6.67h1.605zm.24-1.943a.915.915 0 0 1-.084.39 1.072 1.072 0 0 1-.553.536 1.007 1.007 0 0 1-.796 0 1.042 1.042 0 0 1-.54-.536 1.007 1.007 0 0 1 0-.793 1.031 1.031 0 0 1 .54-.543 1.007 1.007 0 0 1 .796 0 1.048 1.048 0 0 1 .553.543c.056.126.084.26.084.403zm1.573 10.79v-8.846h.981a.48.48 0 0 1 .267.071.334.334 0 0 1 .143.221l.13.617c.269-.307.577-.556.926-.747.35-.19.757-.286 1.226-.286.364 0 .696.076.997.227.301.152.561.372.78.66.22.288.388.644.507 1.066.12.423.179.907.179 1.453 0 .498-.067.96-.201 1.385a3.388 3.388 0 0 1-.576 1.105c-.249.312-.55.555-.903.73a2.629 2.629 0 0 1-1.186.264c-.378 0-.697-.057-.96-.172a2.347 2.347 0 0 1-.704-.478v2.73h-1.606zm3.12-7.703c-.334 0-.619.07-.855.212-.236.14-.456.339-.66.594v2.99c.183.226.38.383.595.472.215.089.445.133.693.133.242 0 .462-.045.66-.136a1.28 1.28 0 0 0 .5-.416c.136-.187.241-.422.315-.706a4.03 4.03 0 0 0 .11-1.004c0-.39-.03-.72-.094-.991a1.915 1.915 0 0 0-.27-.66 1.066 1.066 0 0 0-.425-.37 1.328 1.328 0 0 0-.569-.117zM0 30h48v15.007A2.99 2.99 0 0 1 44.997 48H3.003A3.006 3.006 0 0 1 0 45.007V30z' })
    )
  );
};

Zip.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Zip.defaultProps = {
  color: '#FFFFFF',
  size: '24'
};

exports.default = Zip;