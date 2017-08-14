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

  var Xlsx = function Xlsx(props) {
    return _react2.default.createElement(
      'svg',
      { width: undefined.props.width, height: undefined.props.height, xmlns: 'http://www.w3.org/2000/svg' },
      _react2.default.createElement(
        'g',
        { fill: undefined.props.color, 'fill-rule': 'evenodd' },
        _react2.default.createElement('path', { d: 'M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z', 'fill-rule': 'nonzero' }),
        _react2.default.createElement('path', { d: 'M18.305 43.012a1 1 0 0 1 .075-.383.916.916 0 0 1 .208-.313 1.024 1.024 0 0 1 .706-.285.984.984 0 0 1 .695.286.984.984 0 0 1 .286.695.993.993 0 0 1-.286.696 1 1 0 0 1-.695.28 1.016 1.016 0 0 1-.706-.28.924.924 0 0 1-.208-.31.992.992 0 0 1-.075-.386zm4.889-2.554l-2.191-3.231h1.547c.117 0 .204.016.26.049a.427.427 0 0 1 .15.159l1.397 2.23a1.586 1.586 0 0 1 .201-.442l1.125-1.756a.62.62 0 0 1 .163-.181.357.357 0 0 1 .207-.059h1.476l-2.197 3.159 2.288 3.51h-1.547a.422.422 0 0 1-.283-.091.859.859 0 0 1-.178-.208l-1.417-2.32a1.244 1.244 0 0 1-.163.39l-1.248 1.93a1.036 1.036 0 0 1-.175.205.373.373 0 0 1-.26.094h-1.437l2.282-3.438zm7.15-6.221v9.659h-1.606v-9.659h1.605zm5.771 4.29a.428.428 0 0 1-.136.146.354.354 0 0 1-.182.042.573.573 0 0 1-.25-.065 17.084 17.084 0 0 0-.309-.146 2.828 2.828 0 0 0-.4-.146 1.915 1.915 0 0 0-.53-.065c-.316 0-.565.067-.747.202a.625.625 0 0 0-.273.526c0 .143.047.263.14.36.093.098.216.184.37.258.154.073.328.14.523.198.196.058.395.122.599.191.203.07.402.149.597.238.196.089.37.201.524.338.154.136.277.3.37.49.093.191.14.42.14.69 0 .32-.058.616-.175.887a1.95 1.95 0 0 1-.514.702 2.406 2.406 0 0 1-.835.461c-.332.11-.712.166-1.141.166-.23 0-.454-.02-.673-.062a3.97 3.97 0 0 1-.63-.172 3.49 3.49 0 0 1-.56-.26 2.713 2.713 0 0 1-.451-.325l.37-.611a.524.524 0 0 1 .17-.169.474.474 0 0 1 .246-.059c.1 0 .194.029.283.085.09.056.192.117.309.182.117.065.255.126.413.182.158.056.358.085.601.085.19 0 .354-.023.49-.069.137-.045.25-.105.339-.178a.671.671 0 0 0 .195-.257.77.77 0 0 0 .062-.303.54.54 0 0 0-.14-.383 1.223 1.223 0 0 0-.37-.26 3.578 3.578 0 0 0-.527-.198 17.396 17.396 0 0 1-.605-.192 5.592 5.592 0 0 1-.604-.244 2.06 2.06 0 0 1-.527-.354 1.603 1.603 0 0 1-.37-.527 1.837 1.837 0 0 1-.14-.754c0-.273.054-.532.163-.78a1.83 1.83 0 0 1 .477-.646c.21-.184.473-.332.787-.442.314-.11.677-.166 1.088-.166.46 0 .878.076 1.255.227.377.152.691.351.943.599l-.364.578zm3.302 1.93l-2.19-3.23h1.547c.117 0 .204.016.26.049a.427.427 0 0 1 .15.159l1.397 2.23a1.586 1.586 0 0 1 .201-.442l1.125-1.756a.62.62 0 0 1 .163-.181.357.357 0 0 1 .208-.059h1.475l-2.197 3.159 2.288 3.51h-1.547a.422.422 0 0 1-.283-.091.859.859 0 0 1-.178-.208l-1.417-2.32a1.244 1.244 0 0 1-.163.39l-1.248 1.93a1.036 1.036 0 0 1-.175.205.373.373 0 0 1-.26.094h-1.437l2.281-3.438zM0 30h48v15.007A2.99 2.99 0 0 1 44.997 48H3.003A3.006 3.006 0 0 1 0 45.007V30zM10.158 13.068L6.173 7H8.49c.161 0 .278.022.35.065a.584.584 0 0 1 .194.212l2.844 4.59a2.419 2.419 0 0 1 .216-.44l2.602-4.107c.127-.213.291-.32.493-.32h2.23l-4.028 5.973 4.14 6.527h-2.325a.561.561 0 0 1-.376-.121 1.142 1.142 0 0 1-.237-.277l-2.896-4.789a1.71 1.71 0 0 1-.078.195 3.03 3.03 0 0 1-.086.168l-2.775 4.426a1.377 1.377 0 0 1-.234.273.496.496 0 0 1-.346.125H6l4.158-6.432z' })
      )
    );
  };

  Xlsx.propTypes = {
    color: _propTypes2.default.string,
    size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
  };

  Xlsx.defaultProps = {
    color: 'currentColor',
    size: '24'
  };

  exports.default = Xlsx;
});