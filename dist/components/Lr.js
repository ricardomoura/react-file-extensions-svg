'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Lr = function Lr(props) {
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
                { id: 'file-type-icon-set', transform: 'translate(-220.000000, -765.000000)', fill: color },
                _react2.default.createElement(
                    'g',
                    { id: 'Lr', transform: 'translate(220.000000, 765.000000)' },
                    _react2.default.createElement('path', { d: 'M0,2 L0,2 L2,0 L2,48 L0,46 L48,46 L46,48 L46,0 L48,2 L0,2 Z M0,0 L48,0 L48,48 L0,48 L0,0 L0,0 Z', id: 'Shape', fillRule: 'nonzero' }),
                    _react2.default.createElement('path', { d: 'M13,34.22 L25,34.22 L25,31.13 L16.69,31.13 L16.69,14 L13,14 L13,34.22 Z M28.64,34.22 L32.33,34.22 L32.33,26.66 C32.33,26.24 32.39,25.85 32.45,25.52 C32.78,23.87 33.98,22.73 35.75,22.73 C36.2,22.73 36.53,22.79 36.83,22.85 L36.83,19.37 C36.53,19.31 36.32,19.28 35.96,19.28 C34.4,19.28 32.69,20.33 31.97,22.4 L31.85,22.4 L31.73,19.61 L28.52,19.61 C28.61,20.93 28.64,22.34 28.64,24.32 L28.64,34.22 Z' })
                )
            )
        )
    );
};

Lr.propTypes = {
    color: _propTypes2.default.string,
    size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Lr.defaultProps = {
    color: '#FFFFFF',
    size: '24'
};

exports.default = Lr;