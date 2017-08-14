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

  var Ae = function Ae(props) {
    return _react2.default.createElement(
      'svg',
      { width: undefined.props.width, height: undefined.props.height, xmlns: 'http://www.w3.org/2000/svg' },
      _react2.default.createElement(
        'g',
        { fill: undefined.props.color, 'fill-rule': 'evenodd' },
        _react2.default.createElement('path', { d: 'M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z', 'fill-rule': 'nonzero' }),
        _react2.default.createElement('path', { d: 'M18.97 28.49l1.83 5.73h3.96L18.19 14h-4.71L7 34.22h3.81l1.74-5.73h6.42zm-5.82-2.79l1.56-4.98c.36-1.2.66-2.61.96-3.78h.06c.3 1.17.63 2.55 1.02 3.78l1.59 4.98h-5.19zm26.28 2.25c.06-.33.12-.87.12-1.56 0-3.21-1.56-7.11-6.3-7.11-4.68 0-7.14 3.81-7.14 7.86 0 4.47 2.79 7.38 7.53 7.38 2.1 0 3.84-.39 5.1-.9l-.54-2.55c-1.11.42-2.34.66-4.05.66-2.34 0-4.41-1.14-4.5-3.78h9.78zm-9.78-2.58c.15-1.5 1.11-3.57 3.39-3.57 2.46 0 3.06 2.22 3.03 3.57h-6.42z' })
      )
    );
  };

  Ae.propTypes = {
    color: _propTypes2.default.string,
    size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
  };

  Ae.defaultProps = {
    color: 'currentColor',
    size: '24'
  };

  exports.default = Ae;
});