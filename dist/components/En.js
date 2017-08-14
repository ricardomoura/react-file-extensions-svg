'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var En = function En(props) {
  var size = props.size,
      color = props.color;

  return _react2.default.createElement(
    'svg',
    { width: size, height: size, viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
    _react2.default.createElement(
      'g',
      { fill: color },
      _react2.default.createElement('path', { d: 'M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z', 'fill-rule': 'nonzero' }),
      _react2.default.createElement('path', { d: 'M21.31 22.25h-7.62v-5.22h8.07V14H10v20.22h12.21v-3.03h-8.52v-5.94h7.62v-3zm3.99 11.97h3.72v-8.58c0-.42.03-.87.15-1.2.39-1.11 1.41-2.16 2.88-2.16 2.01 0 2.79 1.59 2.79 3.69v8.25h3.69v-8.67c0-4.62-2.64-6.27-5.19-6.27-2.43 0-4.02 1.38-4.65 2.52h-.09l-.18-2.19h-3.24c.09 1.26.12 2.67.12 4.35v10.26z' })
    )
  );
};

En.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

En.defaultProps = {
  color: '#FFFFFF',
  size: '24'
};

exports.default = En;