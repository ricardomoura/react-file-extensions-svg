'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dw = function Dw(props) {
    var size = props.size,
        color = props.color;

    return _react2.default.createElement(
        'svg',
        { width: size, height: size, viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
        _react2.default.createElement(
            'g',
            { id: 'Page-1', stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            _react2.default.createElement(
                'g',
                { id: 'file-type-icon-set', transform: 'translate(-376.000000, -687.000000)', fill: color },
                _react2.default.createElement(
                    'g',
                    { id: 'Dw', transform: 'translate(376.000000, 687.000000)' },
                    _react2.default.createElement('path', { d: 'M0,2 L0,2 L2,0 L2,48 L0,46 L48,46 L46,48 L46,0 L48,2 L0,2 Z M0,0 L48,0 L48,48 L0,48 L0,0 L0,0 Z', id: 'Shape', fillRule: 'nonzero' }),
                    _react2.default.createElement('path', { d: 'M6,34.3099996 C7.13814431,34.4599996 8.67463912,34.5799996 10.7232989,34.5799996 C14.4507215,34.5799996 17.4952575,33.6499996 19.4016492,31.8199996 C21.2226801,30.0799997 22.389278,27.3799997 22.389278,23.7799998 C22.389278,20.3299999 21.2511337,17.9299999 19.4016492,16.34 C17.6375255,14.78 15.1620617,14 11.5769071,14 C9.49979374,14 7.53649481,14.15 6,14.42 L6,34.3099996 Z M9.49979374,17.0899999 C9.98350507,16.9699999 10.7802061,16.8799999 11.8898968,16.8799999 C16.2717524,16.8799999 18.7187626,19.4299999 18.690309,23.8999998 C18.690309,29.0299997 15.9872163,31.6699997 11.4346391,31.6399997 C10.7232989,31.6399997 9.98350507,31.6399997 9.49979374,31.5499997 L9.49979374,17.0899999 Z M22.2564945,19.7599999 L26.353814,34.3699996 L29.6259789,34.3699996 L31.3901026,28.4299997 C31.7884531,26.9899997 32.15835,25.5499998 32.442886,23.7499998 L32.4997933,23.7499998 C32.8127829,25.5199998 33.1257726,26.8999997 33.5525767,28.4299997 L35.202886,34.3699996 L38.4465973,34.3699996 L42.7999992,19.7599999 L39.3571127,19.7599999 L37.8206179,26.2399998 C37.450721,27.9499997 37.1377313,29.5399997 36.9101025,31.1299997 L36.8531952,31.1299997 C36.5402056,29.5399997 36.1703087,27.9499997 35.7435045,26.2399998 L34.0078345,19.7599999 L31.1624737,19.7599999 L29.3698964,26.4199998 C28.9715459,27.9199997 28.5162882,29.5399997 28.2317521,31.1299997 L28.1748449,31.1299997 C27.9187624,29.5399997 27.6057727,27.9499997 27.2927831,26.3899998 L25.8416491,19.7599999 L22.2564945,19.7599999 Z' })
                )
            )
        )
    );
};

Dw.propTypes = {
    color: _propTypes2.default.string,
    size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Dw.defaultProps = {
    color: '#FFFFFF',
    size: '24'
};

exports.default = Dw;