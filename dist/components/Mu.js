'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mu = function Mu(props) {
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
                { id: 'file-type-icon-set', transform: 'translate(-298.000000, -765.000000)', fill: color },
                _react2.default.createElement(
                    'g',
                    { id: 'Mu', transform: 'translate(298.000000, 765.000000)' },
                    _react2.default.createElement('path', { d: 'M0,2 L0,2 L2,0 L2,48 L0,46 L48,46 L46,48 L46,0 L48,2 L0,2 Z M0,0 L48,0 L48,48 L0,48 L0,0 L0,0 Z', id: 'Shape', fillRule: 'nonzero' }),
                    _react2.default.createElement('path', { d: 'M23.7920792,34.22 L27.3564356,34.22 L26.1980198,14 L21.4455446,14 L18.6831683,22.1 C17.9108911,24.47 17.2277228,26.96 16.6930693,29.15 L16.6039604,29.15 C16.0990099,26.9 15.4752475,24.5 14.7623762,22.13 L12.1485149,14 L7.33663366,14 L6,34.22 L9.41584158,34.22 L9.86138614,26.09 C10.009901,23.33 10.1287129,20.12 10.2178218,17.48 L10.2772277,17.48 C10.8118812,20 11.5247525,22.76 12.2970297,25.34 L14.970297,33.98 L17.7920792,33.98 L20.7029703,25.22 C21.5940594,22.67 22.4257426,19.94 23.0792079,17.48 L23.1683168,17.48 C23.1386139,20.21 23.2871287,23.36 23.4059406,25.97 L23.7920792,34.22 Z M41.8811881,19.61 L38.2277228,19.61 L38.2277228,28.43 C38.2277228,28.85 38.1386139,29.24 38.019802,29.57 C37.6336634,30.5 36.6831683,31.55 35.2277228,31.55 C33.2970297,31.55 32.5247525,29.99 32.5247525,27.56 L32.5247525,19.61 L28.8712871,19.61 L28.8712871,28.19 C28.8712871,32.96 31.2772277,34.55 33.9207921,34.55 C36.5049505,34.55 37.9306931,33.05 38.5544554,32 L38.6138614,32 L38.7920792,34.22 L42,34.22 C41.9405941,33.02 41.8811881,31.58 41.8811881,29.84 L41.8811881,19.61 Z' })
                )
            )
        )
    );
};

Mu.propTypes = {
    color: _propTypes2.default.string,
    size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Mu.defaultProps = {
    color: '#FFFFFF',
    size: '24'
};

exports.default = Mu;