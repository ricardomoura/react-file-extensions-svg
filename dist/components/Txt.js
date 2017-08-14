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

  var Txt = function Txt(props) {
    return _react2.default.createElement(
      'svg',
      { width: undefined.props.width, height: undefined.props.height, xmlns: 'http://www.w3.org/2000/svg' },
      _react2.default.createElement(
        'g',
        { fill: 'none', 'fill-rule': 'evenodd' },
        _react2.default.createElement('path', { d: 'M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z', fill: undefined.props.color, 'fill-rule': 'nonzero' }),
        _react2.default.createElement('path', { d: 'M24.468 43.012a1 1 0 0 1 .074-.383.916.916 0 0 1 .208-.313 1.024 1.024 0 0 1 .706-.285.984.984 0 0 1 .695.286.984.984 0 0 1 .286.695.993.993 0 0 1-.286.696 1 1 0 0 1-.695.28 1.016 1.016 0 0 1-.706-.28.924.924 0 0 1-.208-.31.992.992 0 0 1-.075-.386zm5.498.988c-.576 0-1.02-.164-1.332-.49-.312-.328-.468-.78-.468-1.356v-3.725h-.676a.325.325 0 0 1-.224-.084c-.063-.056-.094-.14-.094-.253v-.637l1.072-.176.338-1.82a.322.322 0 0 1 .12-.202.381.381 0 0 1 .237-.071h.832v2.1h1.755v1.143h-1.755v3.614c0 .209.052.371.156.488a.53.53 0 0 0 .416.175c.1 0 .184-.011.25-.035a1.377 1.377 0 0 0 .31-.15.223.223 0 0 1 .117-.035c.047 0 .086.011.117.035.03.024.062.06.097.108l.481.78a2.43 2.43 0 0 1-.806.441 3 3 0 0 1-.942.15zm4.42-3.542l-2.19-3.231h1.547c.117 0 .204.016.26.049a.427.427 0 0 1 .15.159l1.397 2.23a1.586 1.586 0 0 1 .202-.442l1.124-1.756a.62.62 0 0 1 .163-.181.357.357 0 0 1 .207-.059h1.476l-2.197 3.159 2.288 3.51h-1.547a.422.422 0 0 1-.283-.091.859.859 0 0 1-.178-.208l-1.417-2.32a1.244 1.244 0 0 1-.163.39l-1.248 1.93a1.036 1.036 0 0 1-.175.205.373.373 0 0 1-.26.094h-1.437l2.282-3.438zM42.017 44c-.576 0-1.02-.164-1.332-.49-.312-.328-.468-.78-.468-1.356v-3.725h-.676a.325.325 0 0 1-.224-.084c-.063-.056-.095-.14-.095-.253v-.637l1.073-.176.338-1.82a.322.322 0 0 1 .12-.202.381.381 0 0 1 .237-.071h.832v2.1h1.755v1.143h-1.755v3.614c0 .209.052.371.156.488a.53.53 0 0 0 .416.175c.1 0 .184-.011.25-.035a1.377 1.377 0 0 0 .31-.15.223.223 0 0 1 .117-.035c.047 0 .086.011.117.035.03.024.062.06.097.108l.481.78a2.43 2.43 0 0 1-.806.441 3 3 0 0 1-.943.15zM0 30h48v15.007A2.99 2.99 0 0 1 44.997 48H3.003A3.006 3.006 0 0 1 0 45.007V30z', fill: '#FFF' }),
        _react2.default.createElement('path', { d: 'M17 12h22v2H17v-2zm-8 5h30v2H9v-2zm0 5h30v2H9v-2zM9 9h5v5H9V9z', fill: undefined.props.color })
      )
    );
  };

  Txt.propTypes = {
    color: _propTypes2.default.string,
    size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
  };

  Txt.defaultProps = {
    color: 'currentColor',
    size: '24'
  };

  exports.default = Txt;
});