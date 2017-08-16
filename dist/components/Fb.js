'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fb = function Fb(props) {
    var size = props.size,
        color = props.color;

    return _react2.default.createElement(
        'svg',
        { width: size, height: size, viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
        _react2.default.createElement(
            'g',
            { id: 'Page-1', stroke: 'none', 'stroke-width': '1', fill: 'none', fillRule: 'evenodd' },
            _react2.default.createElement(
                'g',
                { id: 'file-type-icon-set', transform: 'translate(-532.000000, -687.000000)', fill: color },
                _react2.default.createElement(
                    'g',
                    { id: 'Fb', transform: 'translate(532.000000, 687.000000)' },
                    _react2.default.createElement('path', { d: 'M0,2 L0,2 L2,0 L2,48 L0,46 L48,46 L46,48 L46,0 L48,2 L0,2 Z M0,0 L48,0 L48,48 L0,48 L0,0 L0,0 Z', id: 'Shape', fillRule: 'nonzero' }),
                    _react2.default.createElement('path', { d: 'M10,34.3 L13.69,34.3 L13.69,25.72 L21.13,25.72 L21.13,22.69 L13.69,22.69 L13.69,17.11 L21.67,17.11 L21.67,14.08 L10,14.08 L10,34.3 Z M27.67,34.3 L27.85,32.11 L27.91,32.11 C28.96,33.91 30.64,34.63 32.53,34.63 C35.83,34.63 39.16,32.02 39.16,26.77 C39.19,22.33 36.64,19.36 33.07,19.36 C30.88,19.36 29.29,20.29 28.39,21.7 L28.33,21.7 L28.33,13 L24.64,13 L24.64,30.19 C24.64,31.69 24.58,33.31 24.52,34.3 L27.67,34.3 Z M28.33,25.9 C28.33,25.54 28.39,25.21 28.45,24.94 C28.87,23.32 30.22,22.24 31.72,22.24 C34.18,22.24 35.41,24.34 35.41,26.92 C35.41,29.86 34,31.72 31.69,31.72 C30.1,31.72 28.81,30.61 28.42,29.14 C28.36,28.87 28.33,28.57 28.33,28.27 L28.33,25.9 Z' })
                )
            )
        )
    );
};

Fb.propTypes = {
    color: _propTypes2.default.string,
    size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Fb.defaultProps = {
    color: '#FFFFFF',
    size: '24'
};

exports.default = Fb;