'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Ai = function Ai(props) {
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
                { id: 'file-type-icon-set', transform: 'translate(-142.000000, -687.000000)', fill: color },
                _react2.default.createElement(
                    'g',
                    { id: 'Ai', transform: 'translate(142.000000, 687.000000)' },
                    _react2.default.createElement('path', { d: 'M0,2 L0,2 L2,0 L2,48 L0,46 L48,46 L46,48 L46,0 L48,2 L0,2 Z M0,0 L48,0 L48,48 L0,48 L0,0 L0,0 Z', id: 'Shape', fillRule: 'nonzero' }),
                    _react2.default.createElement('path', { d: 'M22.97,28.97 L24.8,34.7 L28.76,34.7 L22.19,14.48 L17.48,14.48 L11,34.7 L14.81,34.7 L16.55,28.97 L22.97,28.97 Z M17.15,26.18 L18.71,21.2 C19.07,20 19.37,18.59 19.67,17.42 L19.73,17.42 C20.03,18.59 20.36,19.97 20.75,21.2 L22.34,26.18 L17.15,26.18 Z M35,34.7 L35,20.09 L31.28,20.09 L31.28,34.7 L35,34.7 Z M33.14,14 C31.91,14 31.07,14.87 31.07,16.01 C31.07,17.12 31.88,17.99 33.11,17.99 C34.4,17.99 35.21,17.12 35.21,16.01 C35.18,14.87 34.4,14 33.14,14 L33.14,14 Z' })
                )
            )
        )
    );
};

Ai.propTypes = {
    color: _propTypes2.default.string,
    size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Ai.defaultProps = {
    color: '#FFFFFF',
    size: '24'
};

exports.default = Ai;