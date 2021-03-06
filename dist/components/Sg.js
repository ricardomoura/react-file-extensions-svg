'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sg = function Sg(props) {
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
                { id: 'file-type-icon-set', transform: 'translate(-610.000000, -765.000000)', fill: color },
                _react2.default.createElement(
                    'g',
                    { id: 'Sg', transform: 'translate(610.000000, 765.000000)' },
                    _react2.default.createElement('path', { d: 'M0,2 L0,2 L2,0 L2,48 L0,46 L48,46 L46,48 L46,0 L48,2 L0,2 Z M0,0 L48,0 L48,48 L0,48 L0,0 L0,0 Z', id: 'Shape', fillRule: 'nonzero' }),
                    _react2.default.createElement('path', { d: 'M9,31.59 C10.11,32.25 12.33,32.85 14.46,32.85 C19.68,32.85 22.14,30.03 22.14,26.79 C22.14,23.88 20.43,22.11 16.92,20.79 C14.22,19.74 13.05,19.02 13.05,17.46 C13.05,16.29 14.07,15.03 16.41,15.03 C18.3,15.03 19.71,15.6 20.43,15.99 L21.33,13.02 C20.28,12.48 18.66,12 16.47,12 C12.09,12 9.33,14.52 9.33,17.82 C9.33,20.73 11.46,22.5 14.79,23.7 C17.37,24.63 18.39,25.53 18.39,27.06 C18.39,28.71 17.07,29.82 14.7,29.82 C12.81,29.82 11.01,29.22 9.81,28.53 L9,31.59 Z M35.46,17.94 L35.31,19.89 L35.25,19.89 C34.56,18.69 33.24,17.61 31.02,17.61 C27.51,17.61 24.39,20.52 24.39,25.32 C24.39,29.46 26.97,32.46 30.6,32.46 C32.52,32.46 34.02,31.59 34.86,30.3 L34.92,30.3 L34.92,31.56 C34.92,34.71 33.12,35.97 30.72,35.97 C28.95,35.97 27.39,35.4 26.46,34.86 L25.65,37.65 C26.91,38.43 28.89,38.82 30.75,38.82 C32.76,38.82 34.86,38.4 36.39,37.05 C37.92,35.67 38.55,33.48 38.55,30.42 L38.55,22.14 C38.55,20.13 38.61,18.93 38.67,17.94 L35.46,17.94 Z M34.86,26.16 C34.86,26.58 34.8,27.09 34.71,27.48 C34.29,28.8 33.09,29.7 31.71,29.7 C29.4,29.7 28.14,27.69 28.14,25.2 C28.14,22.23 29.67,20.43 31.74,20.43 C33.3,20.43 34.35,21.45 34.74,22.8 C34.83,23.1 34.86,23.46 34.86,23.79 L34.86,26.16 Z' })
                )
            )
        )
    );
};

Sg.propTypes = {
    color: _propTypes2.default.string,
    size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Sg.defaultProps = {
    color: '#FFFFFF',
    size: '24'
};

exports.default = Sg;