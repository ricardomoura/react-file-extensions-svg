'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pr = function Pr(props) {
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
                { id: 'file-type-icon-set', transform: 'translate(-454.000000, -765.000000)', fill: color },
                _react2.default.createElement(
                    'g',
                    { id: 'Pr', transform: 'translate(454.000000, 765.000000)' },
                    _react2.default.createElement('path', { d: 'M0,2 L0,2 L2,0 L2,48 L0,46 L48,46 L46,48 L46,0 L48,2 L0,2 Z M0,0 L48,0 L48,48 L0,48 L0,0 L0,0 Z', id: 'Shape', fillRule: 'nonzero' }),
                    _react2.default.createElement('path', { d: 'M13,34.37 L16.66,34.37 L16.66,26.75 C17.14,26.84 17.77,26.87 18.46,26.87 C21.07,26.87 23.38,26.18 24.85,24.71 C25.99,23.63 26.59,22.04 26.59,20.12 C26.59,18.23 25.81,16.64 24.61,15.65 C23.32,14.57 21.34,14 18.64,14 C16.15,14 14.32,14.18 13,14.42 L13,34.37 Z M16.66,17 C17.05,16.91 17.77,16.82 18.79,16.82 C21.34,16.82 22.9,18.02 22.9,20.27 C22.9,22.64 21.22,23.99 18.46,23.99 C17.71,23.99 17.11,23.96 16.66,23.84 L16.66,17 Z M29.26,34.37 L32.95,34.37 L32.95,26.81 C32.95,26.39 33.01,26 33.07,25.67 C33.4,24.02 34.6,22.88 36.37,22.88 C36.82,22.88 37.15,22.94 37.45,23 L37.45,19.52 C37.15,19.46 36.94,19.43 36.58,19.43 C35.02,19.43 33.31,20.48 32.59,22.55 L32.47,22.55 L32.35,19.76 L29.14,19.76 C29.23,21.08 29.26,22.49 29.26,24.47 L29.26,34.37 Z' })
                )
            )
        )
    );
};

Pr.propTypes = {
    color: _propTypes2.default.string,
    size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Pr.defaultProps = {
    color: '#FFFFFF',
    size: '24'
};

exports.default = Pr;