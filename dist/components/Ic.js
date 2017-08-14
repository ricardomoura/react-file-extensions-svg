define(['exports', 'react', 'prop-types'], function (exports, _react, _propTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Ic = function Ic(props) {
    return _react2.default.createElement(
      'svg',
      { width: undefined.props.width, height: undefined.props.height, xmlns: 'http://www.w3.org/2000/svg' },
      _react2.default.createElement(
        'g',
        { fill: undefined.props.color, 'fill-rule': 'evenodd' },
        _react2.default.createElement('path', { d: 'M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z', 'fill-rule': 'nonzero' }),
        _react2.default.createElement('path', { d: 'M15 14v20.22h3.69V14H15zm18 17.04c-.72.3-1.62.57-2.91.57-2.52 0-4.47-1.71-4.47-4.71-.03-2.67 1.65-4.74 4.47-4.74 1.32 0 2.19.3 2.79.57l.66-2.76c-.84-.39-2.22-.69-3.57-.69-5.13 0-8.13 3.42-8.13 7.8 0 4.53 2.97 7.44 7.53 7.44 1.83 0 3.36-.39 4.14-.75L33 31.04z' })
      )
    );
  };

  Ic.propTypes = {
    color: _propTypes2.default.string,
    size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
  };

  Ic.defaultProps = {
    color: 'currentColor',
    size: '24'
  };

  exports.default = Ic;
});