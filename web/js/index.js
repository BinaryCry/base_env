'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UppCase = function (_Component) {
    _inherits(UppCase, _Component);

    function UppCase(props) {
        _classCallCheck(this, UppCase);

        var _this = _possibleConstructorReturn(this, (UppCase.__proto__ || Object.getPrototypeOf(UppCase)).call(this, props));

        _this.state = { value: '' };
        _this.change = _this.change.bind(_this);
        return _this;
    }

    _createClass(UppCase, [{
        key: 'change',
        value: function change(event) {
            var originalValue = event.target.value.toUpperCase();
            setTimeout(function () {
                console.log(value);
            }, 250);
            this.setState({ value: originalValue });
        }
    }, {
        key: 'formSubmit',
        value: function formSubmit(event) {
            alert('Now in state: ' + this.state.value);
            event.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'form',
                { action: '/', onSubmit: this.formSubmit },
                _react2.default.createElement('input', { type: 'text', onChange: this.change, value: this.state.value }),
                _react2.default.createElement('input', { type: 'submit', value: 'Send' })
            );
        }
    }]);

    return UppCase;
}(_react.Component);

(0, _reactDom.render)(_react2.default.createElement(UppCase, null), document.getElementById('root'));

