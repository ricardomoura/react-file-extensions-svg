'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fw = function Fw(props) {
  var size = props.size,
      color = props.color;

  return _react2.default.createElement(
    'svg',
    { width: undefined.props.size, height: undefined.props.size, xmlns: 'http://www.w3.org/2000/svg' },
    _react2.default.createElement(
      'g',
      { fill: undefined.props.color, 'fill-rule': 'evenodd' },
      _react2.default.createElement('path', { d: 'M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z', 'fill-rule': 'nonzero' }),
      _react2.default.createElement('path', { d: 'M8 34.22h3.69v-8.58h7.44v-3.03h-7.44v-5.58h7.98V14H8v20.22zm11.56-14.61l4.32 14.61h3.45l1.86-5.94c.42-1.44.81-2.88 1.11-4.68h.06c.33 1.77.66 3.15 1.11 4.68l1.74 5.94h3.42l4.59-14.61h-3.63l-1.62 6.48c-.39 1.71-.72 3.3-.96 4.89h-.06a94.89 94.89 0 0 0-1.17-4.89l-1.83-6.48h-3l-1.89 6.66c-.42 1.5-.9 3.12-1.2 4.71h-.06c-.27-1.59-.6-3.18-.93-4.74l-1.53-6.63h-3.78z' })
    )
  );
};

Fw.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Fw.defaultProps = {
  color: '#FFFFFF',
  size: '24'
};

exports.default = Fw;