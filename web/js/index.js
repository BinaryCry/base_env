'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TempInput = function (_Component) {
    _inherits(TempInput, _Component);

    function TempInput(props) {
        _classCallCheck(this, TempInput);

        return _possibleConstructorReturn(this, (TempInput.__proto__ || Object.getPrototypeOf(TempInput)).call(this, props));
    }

    _createClass(TempInput, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'p',
                null,
                'Input in ',
                this.props.scale,
                ': ',
                _react2.default.createElement('input', { onChange: this.props.onTeempChange, type: 'text', value: this.props.currentTemp })
            );
        }
    }]);

    return TempInput;
}(_react.Component);

var BoilVerdict = function (_Component2) {
    _inherits(BoilVerdict, _Component2);

    function BoilVerdict(props) {
        _classCallCheck(this, BoilVerdict);

        return _possibleConstructorReturn(this, (BoilVerdict.__proto__ || Object.getPrototypeOf(BoilVerdict)).call(this, props));
    }

    _createClass(BoilVerdict, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                    'b',
                    null,
                    this.props.substance,
                    ' is ',
                    this.props.temp >= this.props.boilTemp ? '' : 'not',
                    ' boiled'
                )
            );
        }
    }]);

    return BoilVerdict;
}(_react.Component);

var Boil = function (_Component3) {
    _inherits(Boil, _Component3);

    function Boil(props) {
        _classCallCheck(this, Boil);

        var _this3 = _possibleConstructorReturn(this, (Boil.__proto__ || Object.getPrototypeOf(Boil)).call(this, props));

        _this3.fahrenheitState = _this3.fahrenheitState.bind(_this3);
        _this3.celsiumState = _this3.celsiumState.bind(_this3);
        _this3.boilTemps = {
            water: {
                c: 100,
                f: 212
            }
        };
        _this3.scales = {
            f: 'Fahrenheit',
            c: 'Celsium'
        };
        _this3.initialState = {
            f_degr: '',
            c_degr: ''
        };
        _this3.state = _this3.initialState;
        return _this3;
    }

    _createClass(Boil, [{
        key: 'fahrenheitState',
        value: function fahrenheitState(syntEvent) {
            var value = syntEvent.target.value;
            if (value == '') {
                this.setState(this.initialState);
                return false;
            }
            var c_degr = Math.round((value - 32) * 5 / 9 * 10) / 10;
            this.setState({
                f_degr: value,
                c_degr: !c_degr ? 'incorrect' : c_degr
            });
        }
    }, {
        key: 'celsiumState',
        value: function celsiumState(syntEvent) {
            var value = syntEvent.target.value;
            if (value == '') {
                this.setState(this.initialState);
                return false;
            }
            var f_degr = Math.round((value * 9 / 5 + 32) * 10) / 10;
            this.setState({
                c_degr: value,
                f_degr: !f_degr ? 'incorrect' : f_degr
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(TempInput, { scale: this.scales.c, onTeempChange: this.celsiumState, currentTemp: this.state.c_degr }),
                _react2.default.createElement(TempInput, { scale: this.scales.f, onTeempChange: this.fahrenheitState, currentTemp: this.state.f_degr }),
                _react2.default.createElement(BoilVerdict, { temp: this.state.c_degr, substance: this.props.substance, boilTemp: this.boilTemps[this.props.substance].c })
            );
        }
    }]);

    return Boil;
}(_react.Component);

(0, _reactDom.render)(_react2.default.createElement(Boil, { substance: 'water' }), document.getElementById('root'));

