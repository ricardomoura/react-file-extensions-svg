'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Ic = function Ic(props) {
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
                { id: 'file-type-icon-set', transform: 'translate(-64.000000, -765.000000)', fill: color },
                _react2.default.createElement(
                    'g',
                    { id: 'Ic', transform: 'translate(64.000000, 765.000000)' },
                    _react2.default.createElement('path', { d: 'M0,2 L0,2 L2,0 L2,48 L0,46 L48,46 L46,48 L46,0 L48,2 L0,2 Z M0,0 L48,0 L48,48 L0,48 L0,0 L0,0 Z', id: 'Shape', fillRule: 'nonzero' }),
                    _react2.default.createElement('path', { d: 'M15,14 L15,34.22 L18.69,34.22 L18.69,14 L15,14 Z M33,31.04 C32.28,31.34 31.38,31.61 30.09,31.61 C27.57,31.61 25.62,29.9 25.62,26.9 C25.59,24.23 27.27,22.16 30.09,22.16 C31.41,22.16 32.28,22.46 32.88,22.73 L33.54,19.97 C32.7,19.58 31.32,19.28 29.97,19.28 C24.84,19.28 21.84,22.7 21.84,27.08 C21.84,31.61 24.81,34.52 29.37,34.52 C31.2,34.52 32.73,34.13 33.51,33.77 L33,31.04 Z' })
                )
            )
        )
    );
};

Ic.propTypes = {
    color: _propTypes2.default.string,
    size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Ic.defaultProps = {
    color: '#FFFFFF',
    size: '24'
};

exports.default = Ic;