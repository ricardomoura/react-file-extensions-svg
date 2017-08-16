'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Ps = function Ps(props) {
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
                { id: 'file-type-icon-set', transform: 'translate(-532.000000, -765.000000)', fill: color },
                _react2.default.createElement(
                    'g',
                    { id: 'Ps', transform: 'translate(532.000000, 765.000000)' },
                    _react2.default.createElement('path', { d: 'M0,2 L0,2 L2,0 L2,48 L0,46 L48,46 L46,48 L46,0 L48,2 L0,2 Z M0,0 L48,0 L48,48 L0,48 L0,0 L0,0 Z', id: 'Shape', fillRule: 'nonzero' }),
                    _react2.default.createElement('path', { d: 'M11,34.37 L14.66,34.37 L14.66,26.75 C15.14,26.84 15.77,26.87 16.46,26.87 C19.07,26.87 21.38,26.18 22.85,24.71 C23.99,23.63 24.59,22.04 24.59,20.12 C24.59,18.23 23.81,16.64 22.61,15.65 C21.32,14.57 19.34,14 16.64,14 C14.15,14 12.32,14.18 11,14.42 L11,34.37 Z M14.66,17 C15.05,16.91 15.77,16.82 16.79,16.82 C19.34,16.82 20.9,18.02 20.9,20.27 C20.9,22.64 19.22,23.99 16.46,23.99 C15.71,23.99 15.11,23.96 14.66,23.84 L14.66,17 Z M26.72,33.65 C27.8,34.25 29.39,34.67 31.16,34.67 C35.03,34.67 37.1,32.75 37.1,30.11 C37.07,27.95 35.84,26.6 33.2,25.64 C31.34,24.98 30.65,24.53 30.65,23.6 C30.65,22.7 31.37,22.07 32.69,22.07 C33.98,22.07 35.15,22.55 35.78,22.91 L36.5,20.3 C35.66,19.85 34.25,19.43 32.63,19.43 C29.24,19.43 27.11,21.44 27.11,24.02 C27.08,25.73 28.28,27.29 31.13,28.28 C32.93,28.91 33.53,29.42 33.53,30.41 C33.53,31.37 32.81,32.03 31.19,32.03 C29.87,32.03 28.28,31.49 27.44,30.98 L26.72,33.65 Z' })
                )
            )
        )
    );
};

Ps.propTypes = {
    color: _propTypes2.default.string,
    size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Ps.defaultProps = {
    color: '#FFFFFF',
    size: '24'
};

exports.default = Ps;