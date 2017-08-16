'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fw = function Fw(props) {
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
                { id: 'file-type-icon-set', transform: 'translate(-688.000000, -687.000000)', fill: color },
                _react2.default.createElement(
                    'g',
                    { id: 'Fw', transform: 'translate(688.000000, 687.000000)' },
                    _react2.default.createElement('path', { d: 'M0,2 L0,2 L2,0 L2,48 L0,46 L48,46 L46,48 L46,0 L48,2 L0,2 Z M0,0 L48,0 L48,48 L0,48 L0,0 L0,0 Z', id: 'Shape', fillRule: 'nonzero' }),
                    _react2.default.createElement('path', { d: 'M8,34.22 L11.69,34.22 L11.69,25.64 L19.13,25.64 L19.13,22.61 L11.69,22.61 L11.69,17.03 L19.67,17.03 L19.67,14 L8,14 L8,34.22 Z M19.56,19.61 L23.88,34.22 L27.33,34.22 L29.19,28.28 C29.61,26.84 30,25.4 30.3,23.6 L30.36,23.6 C30.69,25.37 31.02,26.75 31.47,28.28 L33.21,34.22 L36.63,34.22 L41.22,19.61 L37.59,19.61 L35.97,26.09 C35.58,27.8 35.25,29.39 35.01,30.98 L34.95,30.98 C34.62,29.39 34.23,27.8 33.78,26.09 L31.95,19.61 L28.95,19.61 L27.06,26.27 C26.64,27.77 26.16,29.39 25.86,30.98 L25.8,30.98 C25.53,29.39 25.2,27.8 24.87,26.24 L23.34,19.61 L19.56,19.61 Z' })
                )
            )
        )
    );
};

Fw.propTypes = {
    color: _propTypes2.default.string,
    size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Fw.defaultProps = {
    color: '#FFFFFF',
    size: '24'
};

exports.default = Fw;