'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Gif = function Gif(props) {
  var size = props.size,
      color = props.color;

  return _react2.default.createElement(
    'svg',
    { width: size, height: size, xmlns: 'http://www.w3.org/2000/svg' },
    _react2.default.createElement(
      'g',
      { fill: color, 'fill-rule': 'evenodd' },
      _react2.default.createElement('path', { d: 'M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z', 'fill-rule': 'nonzero' }),
      _react2.default.createElement('path', { d: 'M11 10.007v12.986A.999.999 0 0 0 9.998 22h28.004a.997.997 0 0 0-1.002.993V10.007c0 .544.446.993 1.002.993H9.998A.997.997 0 0 0 11 10.007zm-2 0C9 9.451 9.447 9 9.998 9h28.004c.551 0 .998.449.998 1.007v12.986c0 .556-.447 1.007-.998 1.007H9.998C9.447 24 9 23.551 9 22.993V10.007zM23.5 17.5l4 4 5-6L38 24H17l6.5-6.5zM17 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z', 'fill-rule': 'nonzero' }),
      _react2.default.createElement('path', { d: 'M26.742 42.77a1 1 0 0 1 .075-.384.916.916 0 0 1 .208-.312 1.024 1.024 0 0 1 .706-.286.984.984 0 0 1 .695.286.984.984 0 0 1 .286.696.993.993 0 0 1-.286.696 1 1 0 0 1-.695.28 1.016 1.016 0 0 1-.706-.281.924.924 0 0 1-.208-.309.992.992 0 0 1-.075-.386zm5.616-5.903c.287 0 .555.03.806.088.252.059.481.144.69.257h1.917v.598c0 .1-.026.178-.078.234-.052.056-.14.095-.267.117l-.598.11a2.066 2.066 0 0 1 .137.755c0 .329-.066.627-.198.893a2.003 2.003 0 0 1-.546.68c-.232.186-.507.33-.826.432a3.387 3.387 0 0 1-1.037.153c-.25 0-.496-.024-.734-.072-.208.126-.312.266-.312.422 0 .135.062.233.185.296.124.063.286.107.488.134.201.026.43.042.685.048.256.007.518.02.787.042.269.022.53.06.786.114.256.054.485.14.686.257.202.117.364.276.488.478.123.201.185.46.185.776 0 .295-.073.581-.218.858a2.305 2.305 0 0 1-.63.742 3.293 3.293 0 0 1-1.011.523 4.331 4.331 0 0 1-1.365.198c-.507 0-.947-.049-1.32-.146a3.08 3.08 0 0 1-.926-.39 1.691 1.691 0 0 1-.549-.563 1.318 1.318 0 0 1-.182-.663c0-.312.095-.574.286-.786.19-.212.455-.381.793-.507a1.106 1.106 0 0 1-.396-.364c-.1-.152-.15-.349-.15-.592 0-.1.017-.202.052-.308.035-.106.088-.211.16-.316.07-.104.16-.202.269-.295.108-.093.236-.177.384-.25a2.104 2.104 0 0 1-.797-.728 1.944 1.944 0 0 1-.289-1.066c0-.33.066-.628.198-.894.132-.267.317-.494.553-.683a2.52 2.52 0 0 1 .838-.432c.323-.1.675-.15 1.056-.15zm1.762 7.086a.444.444 0 0 0-.117-.319.769.769 0 0 0-.319-.192 2.356 2.356 0 0 0-.47-.1 8.691 8.691 0 0 0-.573-.05c-.201-.01-.41-.02-.624-.032a7.87 7.87 0 0 1-.62-.055c-.183.1-.329.218-.44.354a.728.728 0 0 0-.165.472c0 .117.03.226.088.328.058.102.151.19.28.263.127.074.293.131.497.172.203.041.452.062.747.062.299 0 .557-.023.773-.068a1.86 1.86 0 0 0 .537-.189.811.811 0 0 0 .309-.286.699.699 0 0 0 .097-.36zm-1.761-3.797c.199 0 .372-.027.52-.08a1.02 1.02 0 0 0 .367-.225.924.924 0 0 0 .22-.344c.05-.135.075-.282.075-.442 0-.33-.098-.59-.295-.784-.197-.193-.493-.289-.888-.289-.394 0-.69.096-.887.29-.197.192-.296.453-.296.783 0 .156.025.3.075.435.05.134.124.25.221.348a.993.993 0 0 0 .37.227c.15.054.322.081.517.081zm6.129-3.172v6.67h-1.605v-6.67h1.605zm.24-1.943a.915.915 0 0 1-.084.39 1.072 1.072 0 0 1-.552.536 1.007 1.007 0 0 1-.797 0 1.042 1.042 0 0 1-.54-.536 1.007 1.007 0 0 1 0-.793 1.031 1.031 0 0 1 .54-.543 1.007 1.007 0 0 1 .796 0 1.048 1.048 0 0 1 .552.543c.057.126.085.26.085.403zm1.86 8.613v-5.46l-.579-.092a.615.615 0 0 1-.302-.13.34.34 0 0 1-.114-.273v-.656h.994v-.494c0-.381.058-.724.173-1.027.115-.303.28-.561.494-.773.214-.213.475-.375.783-.488a3.01 3.01 0 0 1 1.04-.169c.308 0 .594.041.858.123l-.032.806c-.01.126-.068.204-.176.234-.108.03-.234.046-.377.046-.19 0-.36.02-.51.062a.859.859 0 0 0-.38.214.972.972 0 0 0-.238.403 2.035 2.035 0 0 0-.081.621v.442h1.736v1.144h-1.684v5.467h-1.605zM0 30h48v15.007A2.99 2.99 0 0 1 44.997 48H3.003A3.006 3.006 0 0 1 0 45.007V30z' })
    )
  );
};

Gif.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Gif.defaultProps = {
  color: '#FFFFFF',
  size: '24'
};

exports.default = Gif;