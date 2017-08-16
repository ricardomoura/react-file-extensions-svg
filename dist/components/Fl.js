'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fl = function Fl(props) {
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
                { id: 'file-type-icon-set', transform: 'translate(-610.000000, -687.000000)', fill: color },
                _react2.default.createElement(
                    'g',
                    { id: 'Fl', transform: 'translate(610.000000, 687.000000)' },
                    _react2.default.createElement('path', { d: 'M0,2 L0,2 L2,0 L2,48 L0,46 L48,46 L46,48 L46,0 L48,2 L0,2 Z M0,0 L48,0 L48,48 L0,48 L0,0 L0,0 Z', id: 'Shape', fillRule: 'nonzero' }),
                    _react2.default.createElement('path', { d: 'M14,34.3 L17.69,34.3 L17.69,25.72 L25.13,25.72 L25.13,22.69 L17.69,22.69 L17.69,17.11 L25.67,17.11 L25.67,14.08 L14,14.08 L14,34.3 Z M30.12,34.3 L33.84,34.3 L33.84,13 L30.12,13 L30.12,34.3 Z' })
                )
            )
        )
    );
};

Fl.propTypes = {
    color: _propTypes2.default.string,
    size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Fl.defaultProps = {
    color: '#FFFFFF',
    size: '24'
};

exports.default = Fl;