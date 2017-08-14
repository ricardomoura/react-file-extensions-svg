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

  var Id = function Id(props) {
    return _react2.default.createElement(
      'svg',
      { width: undefined.props.width, height: undefined.props.height, xmlns: 'http://www.w3.org/2000/svg' },
      _react2.default.createElement(
        'g',
        { fill: undefined.props.color, 'fill-rule': 'evenodd' },
        _react2.default.createElement('path', { d: 'M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z', 'fill-rule': 'nonzero' }),
        _react2.default.createElement('path', { d: 'M13 14.08V34.3h3.69V14.08H13zM30.55 13v8.28h-.06c-.66-1.08-2.1-1.92-4.11-1.92-3.51 0-6.57 2.91-6.54 7.8 0 4.5 2.76 7.47 6.24 7.47 2.13 0 3.9-1.02 4.77-2.64h.06l.15 2.31h3.3c-.06-.99-.12-2.61-.12-4.11V13h-3.69zm0 14.97c0 .39-.03.75-.12 1.08-.36 1.59-1.68 2.61-3.18 2.61-2.34 0-3.66-1.95-3.66-4.62 0-2.73 1.32-4.83 3.69-4.83 1.68 0 2.85 1.17 3.18 2.61.06.3.09.66.09.96v2.19z' })
      )
    );
  };

  Id.propTypes = {
    color: _propTypes2.default.string,
    size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
  };

  Id.defaultProps = {
    color: 'currentColor',
    size: '24'
  };

  exports.default = Id;
});