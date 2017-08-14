'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Lr = function Lr(props) {
  var size = props.size,
      color = props.color;

  return _react2.default.createElement(
    'svg',
    { width: size, height: size, viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
    _react2.default.createElement(
      'g',
      { fill: color },
      _react2.default.createElement('path', { d: 'M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z', 'fill-rule': 'nonzero' }),
      _react2.default.createElement('path', { d: 'M13 34.22h12v-3.09h-8.31V14H13v20.22zm15.64 0h3.69v-7.56c0-.42.06-.81.12-1.14.33-1.65 1.53-2.79 3.3-2.79.45 0 .78.06 1.08.12v-3.48c-.3-.06-.51-.09-.87-.09-1.56 0-3.27 1.05-3.99 3.12h-.12l-.12-2.79h-3.21c.09 1.32.12 2.73.12 4.71v9.9z' })
    )
  );
};

Lr.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Lr.defaultProps = {
  color: '#FFFFFF',
  size: '24'
};

exports.default = Lr;