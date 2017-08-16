'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Html = function Html(props) {
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
                { id: 'file-type-icon-set', transform: 'translate(-64.000000, -1107.000000)', fill: color },
                _react2.default.createElement(
                    'g',
                    { id: '.html', transform: 'translate(64.000000, 1107.000000)' },
                    _react2.default.createElement('path', { d: 'M0,2 L0,2 L2,0 L2,48 L0,46 L48,46 L46,48 L46,0 L48,2 L0,2 Z M0,0 L48,0 L48,48 L0,48 L0,0 L0,0 Z', id: 'Shape', fillRule: 'nonzero' }),
                    _react2.default.createElement('path', { d: 'M19.5624751,20.8722486 L11.5,17.3159907 L11.5,16.1549293 L19.5624751,12.1277514 L19.5624751,14.0763859 L14.0088669,16.6502072 L19.5624751,18.9317334 L19.5624751,20.8722486 Z M27.0647177,10.5647842 L22.6396936,22.4352158 L20.3906447,22.4352158 L24.8156688,10.5647842 L27.0647177,10.5647842 Z M28.1528885,19.2442009 L33.9025605,16.8821281 L28.1528885,14.217441 L28.1528885,12.2000122 L36.5,16.369365 L36.5,17.5714163 L28.1528885,21.2532237 L28.1528885,19.2442009 Z', id: '</>' }),
                    _react2.default.createElement('path', { d: 'M15,42.775 C15,42.640666 15.0249164,42.5128339 15.07475,42.3915 C15.1245836,42.2701661 15.1939162,42.1661671 15.28275,42.0795 C15.3715838,41.9928329 15.4766661,41.9235003 15.598,41.8715 C15.7193339,41.8194997 15.8493326,41.7935 15.988,41.7935 C16.122334,41.7935 16.2501661,41.8194997 16.3715,41.8715 C16.4928339,41.9235003 16.5968329,41.9928329 16.6835,42.0795 C16.7701671,42.1661671 16.8394997,42.2701661 16.8915,42.3915 C16.9435003,42.5128339 16.9695,42.640666 16.9695,42.775 C16.9695,42.9136674 16.9435003,43.0425827 16.8915,43.16175 C16.8394997,43.2809173 16.7701671,43.3838329 16.6835,43.4705 C16.5968329,43.5571671 16.4928339,43.6254164 16.3715,43.67525 C16.2501661,43.7250836 16.122334,43.75 15.988,43.75 C15.8493326,43.75 15.7193339,43.7250836 15.598,43.67525 C15.4766661,43.6254164 15.3715838,43.5571671 15.28275,43.4705 C15.1939162,43.3838329 15.1245836,43.2809173 15.07475,43.16175 C15.0249164,43.0425827 15,42.9136674 15,42.775 L15,42.775 Z M18.3085,43.659 L18.3085,34 L19.914,34 L19.914,37.7115 C20.1740013,37.4644988 20.4599984,37.2651674 20.772,37.1135 C21.0840016,36.9618326 21.4501646,36.886 21.8705,36.886 C22.2345018,36.886 22.5573319,36.9477494 22.839,37.07125 C23.1206681,37.1947506 23.3557491,37.3680822 23.54425,37.59125 C23.7327509,37.8144178 23.8757495,38.0809151 23.97325,38.39075 C24.0707505,38.7005849 24.1195,39.0418315 24.1195,39.4145 L24.1195,43.659 L22.514,43.659 L22.514,39.4145 C22.514,39.0071646 22.4197509,38.6919178 22.23125,38.46875 C22.0427491,38.2455822 21.7600019,38.134 21.383,38.134 C21.1056653,38.134 20.8456679,38.1968327 20.603,38.3225 C20.3603321,38.4481673 20.1306678,38.6193322 19.914,38.836 L19.914,43.659 L18.3085,43.659 Z M27.8895,43.763 C27.3131638,43.763 26.8690016,43.5994183 26.557,43.27225 C26.2449984,42.9450817 26.089,42.4933362 26.089,41.917 L26.089,38.1925 L25.413,38.1925 C25.3263329,38.1925 25.2515836,38.1643336 25.18875,38.108 C25.1259164,38.0516664 25.0945,37.9671672 25.0945,37.8545 L25.0945,37.2175 L26.167,37.042 L26.505,35.222 C26.5223334,35.1353329 26.5624164,35.0681669 26.62525,35.0205 C26.6880836,34.9728331 26.7671662,34.949 26.8625,34.949 L27.6945,34.949 L27.6945,37.0485 L29.4495,37.0485 L29.4495,38.1925 L27.6945,38.1925 L27.6945,41.8065 C27.6945,42.014501 27.7464995,42.1769994 27.8505,42.294 C27.9545005,42.4110006 28.0931658,42.4695 28.2665,42.4695 C28.3661672,42.4695 28.449583,42.4575835 28.51675,42.43375 C28.583917,42.4099165 28.6424164,42.3850001 28.69225,42.359 C28.7420836,42.3329999 28.7864998,42.3080835 28.8255,42.28425 C28.8645002,42.2604165 28.9034998,42.2485 28.9425,42.2485 C28.9901669,42.2485 29.0291665,42.2604165 29.0595,42.28425 C29.0898335,42.3080835 29.1223332,42.3438331 29.157,42.3915 L29.638,43.1715 C29.4039988,43.366501 29.1353349,43.5138328 28.832,43.6135 C28.5286651,43.7131672 28.2145016,43.763 27.8895,43.763 L27.8895,43.763 Z M30.73,43.659 L30.73,36.99 L31.7115,36.99 C31.919501,36.99 32.0559997,37.087499 32.121,37.2825 L32.225,37.7765 C32.3420006,37.6464993 32.464416,37.5273339 32.59225,37.419 C32.720084,37.3106661 32.8565826,37.2175004 33.00175,37.1395 C33.1469174,37.0614996 33.3029158,36.9997502 33.46975,36.95425 C33.6365842,36.9087498 33.8196657,36.886 34.019,36.886 C34.4393354,36.886 34.7849153,36.9997489 35.05575,37.22725 C35.3265847,37.4547511 35.529166,37.7569981 35.6635,38.134 C35.7675005,37.9129989 35.8974992,37.7234175 36.0535,37.56525 C36.2095008,37.4070825 36.3806657,37.2781672 36.567,37.1785 C36.7533343,37.0788328 36.9515823,37.0051669 37.16175,36.9575 C37.3719177,36.9098331 37.5831656,36.886 37.7955,36.886 C38.1638352,36.886 38.4909986,36.9423328 38.777,37.055 C39.0630014,37.1676672 39.303499,37.3323323 39.4985,37.549 C39.693501,37.7656678 39.8419162,38.0299984 39.94375,38.342 C40.0455838,38.6540016 40.0965,39.011498 40.0965,39.4145 L40.0965,43.659 L38.491,43.659 L38.491,39.4145 C38.491,38.9898312 38.3978343,38.6702511 38.2115,38.45575 C38.0251657,38.2412489 37.7521685,38.134 37.3925,38.134 C37.2278325,38.134 37.075084,38.1621664 36.93425,38.2185 C36.793416,38.2748336 36.6699172,38.3560828 36.56375,38.46225 C36.4575828,38.5684172 36.374167,38.7016659 36.3135,38.862 C36.252833,39.0223341 36.2225,39.206499 36.2225,39.4145 L36.2225,43.659 L34.6105,43.659 L34.6105,39.4145 C34.6105,38.9681644 34.5205842,38.6431677 34.34075,38.4395 C34.1609158,38.2358323 33.8955018,38.134 33.5445,38.134 C33.3148322,38.134 33.099251,38.1914161 32.89775,38.30625 C32.696249,38.4210839 32.5088342,38.5781657 32.3355,38.7775 L32.3355,43.659 L30.73,43.659 Z M43.3855,34 L43.3855,43.659 L41.78,43.659 L41.78,34 L43.3855,34 Z M0,30 L48,30 L48,45.0074602 C48,46.6601943 46.6661074,48 44.997385,48 L3.00261497,48 C1.34431651,48 0,46.6470745 0,45.0074602 L0,30 Z' })
                )
            )
        )
    );
};

Html.propTypes = {
    color: _propTypes2.default.string,
    size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Html.defaultProps = {
    color: '#FFFFFF',
    size: '24'
};

exports.default = Html;