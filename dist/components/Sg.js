'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sg = function Sg(props) {
  var size = props.size,
      color = props.color;

  return _react2.default.createElement(
    'svg',
    { width: undefined.props.size, height: undefined.props.size, xmlns: 'http://www.w3.org/2000/svg' },
    _react2.default.createElement(
      'g',
      { fill: undefined.props.color, 'fill-rule': 'evenodd' },
      _react2.default.createElement('path', { d: 'M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z', 'fill-rule': 'nonzero' }),
      _react2.default.createElement('path', { d: 'M9 31.59c1.11.66 3.33 1.26 5.46 1.26 5.22 0 7.68-2.82 7.68-6.06 0-2.91-1.71-4.68-5.22-6-2.7-1.05-3.87-1.77-3.87-3.33 0-1.17 1.02-2.43 3.36-2.43 1.89 0 3.3.57 4.02.96l.9-2.97c-1.05-.54-2.67-1.02-4.86-1.02-4.38 0-7.14 2.52-7.14 5.82 0 2.91 2.13 4.68 5.46 5.88 2.58.93 3.6 1.83 3.6 3.36 0 1.65-1.32 2.76-3.69 2.76-1.89 0-3.69-.6-4.89-1.29L9 31.59zm26.46-13.65l-.15 1.95h-.06c-.69-1.2-2.01-2.28-4.23-2.28-3.51 0-6.63 2.91-6.63 7.71 0 4.14 2.58 7.14 6.21 7.14 1.92 0 3.42-.87 4.26-2.16h.06v1.26c0 3.15-1.8 4.41-4.2 4.41-1.77 0-3.33-.57-4.26-1.11l-.81 2.79c1.26.78 3.24 1.17 5.1 1.17 2.01 0 4.11-.42 5.64-1.77 1.53-1.38 2.16-3.57 2.16-6.63v-8.28c0-2.01.06-3.21.12-4.2h-3.21zm-.6 8.22c0 .42-.06.93-.15 1.32-.42 1.32-1.62 2.22-3 2.22-2.31 0-3.57-2.01-3.57-4.5 0-2.97 1.53-4.77 3.6-4.77 1.56 0 2.61 1.02 3 2.37.09.3.12.66.12.99v2.37z' })
    )
  );
};

Sg.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Sg.defaultProps = {
  color: '#FFFFFF',
  size: '24'
};

exports.default = Sg;