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

  var Tiff = function Tiff(props) {
    return _react2.default.createElement(
      'svg',
      { width: undefined.props.width, height: undefined.props.height, xmlns: 'http://www.w3.org/2000/svg' },
      _react2.default.createElement(
        'g',
        { fill: undefined.props.color, 'fill-rule': 'evenodd' },
        _react2.default.createElement('path', { d: 'M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z', 'fill-rule': 'nonzero' }),
        _react2.default.createElement('path', { d: 'M11 10.007v12.986A.999.999 0 0 0 9.998 22h28.004a.997.997 0 0 0-1.002.993V10.007c0 .544.446.993 1.002.993H9.998A.997.997 0 0 0 11 10.007zm-2 0C9 9.451 9.447 9 9.998 9h28.004c.551 0 .998.449.998 1.007v12.986c0 .556-.447 1.007-.998 1.007H9.998C9.447 24 9 23.551 9 22.993V10.007zM23.5 17.5l4 4 5-6L38 24H17l6.5-6.5zM17 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z', 'fill-rule': 'nonzero' }),
        _react2.default.createElement('path', { d: 'M23.883 43.012a1 1 0 0 1 .074-.383.916.916 0 0 1 .208-.313 1.024 1.024 0 0 1 .706-.285.984.984 0 0 1 .695.286.984.984 0 0 1 .286.695.993.993 0 0 1-.286.696 1 1 0 0 1-.695.28 1.016 1.016 0 0 1-.706-.28.924.924 0 0 1-.208-.31.992.992 0 0 1-.075-.386zM29.38 44c-.576 0-1.02-.164-1.332-.49-.312-.328-.468-.78-.468-1.356v-3.725h-.676a.325.325 0 0 1-.224-.084c-.063-.056-.095-.14-.095-.253v-.637l1.073-.176.338-1.82a.322.322 0 0 1 .12-.202.381.381 0 0 1 .238-.071h.831v2.1h1.756v1.143h-1.756v3.614c0 .209.052.371.157.488a.53.53 0 0 0 .416.175c.1 0 .183-.011.25-.035a1.377 1.377 0 0 0 .308-.15.223.223 0 0 1 .117-.035c.048 0 .087.011.117.035.03.024.063.06.098.108l.481.78a2.43 2.43 0 0 1-.806.441 3 3 0 0 1-.943.15zm4.55-6.773v6.669h-1.605v-6.669h1.605zm.241-1.944a.915.915 0 0 1-.084.39 1.072 1.072 0 0 1-.553.537 1.007 1.007 0 0 1-.796 0 1.042 1.042 0 0 1-.54-.537 1.007 1.007 0 0 1 0-.793 1.031 1.031 0 0 1 .54-.542 1.007 1.007 0 0 1 .796 0 1.048 1.048 0 0 1 .553.543c.056.125.084.26.084.402zm1.859 8.613v-5.46l-.578-.091a.615.615 0 0 1-.303-.13.34.34 0 0 1-.114-.273v-.657h.995v-.493c0-.382.057-.724.172-1.028.115-.303.28-.56.494-.773.215-.212.476-.375.783-.487a3.01 3.01 0 0 1 1.04-.17c.308 0 .594.042.858.124l-.032.806c-.009.126-.067.204-.175.234-.109.03-.234.046-.377.046-.191 0-.361.02-.51.061a.859.859 0 0 0-.381.215.972.972 0 0 0-.237.403 2.035 2.035 0 0 0-.081.62v.442h1.735v1.145h-1.684v5.466h-1.605zm4.556 0v-5.46l-.578-.091a.615.615 0 0 1-.302-.13.34.34 0 0 1-.114-.273v-.657h.994v-.493c0-.382.058-.724.173-1.028.115-.303.28-.56.494-.773.214-.212.475-.375.783-.487a3.01 3.01 0 0 1 1.04-.17c.308 0 .594.042.858.124l-.032.806c-.01.126-.068.204-.176.234-.108.03-.234.046-.377.046-.19 0-.36.02-.51.061a.859.859 0 0 0-.38.215.972.972 0 0 0-.238.403 2.035 2.035 0 0 0-.081.62v.442h1.736v1.145h-1.684v5.466h-1.605zM0 30h48v15.007A2.99 2.99 0 0 1 44.997 48H3.003A3.006 3.006 0 0 1 0 45.007V30z' })
      )
    );
  };

  Tiff.propTypes = {
    color: _propTypes2.default.string,
    size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
  };

  Tiff.defaultProps = {
    color: 'currentColor',
    size: '24'
  };

  exports.default = Tiff;
});