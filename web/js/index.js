'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Geet(props) {
    if (props.logstatus) return _react2.default.createElement(
        'div',
        null,
        'Hello, user!'
    );
    return _react2.default.createElement(
        'div',
        null,
        'Please Sign Up or Sign In'
    );
}
function LoginButton(props) {
    return _react2.default.createElement(
        'button',
        { onClick: props.onClick },
        'Please Log In'
    );
}
function LogOutButton(props) {
    return _react2.default.createElement(
        'button',
        { onClick: props.onClick },
        'Log Out'
    );
}
/*function RegLink(props) {
    if( props.logstatus ) return null;
    return <a href="/registration">registration</a>
}*/

var RegLink = function (_Component) {
    _inherits(RegLink, _Component);

    function RegLink(props) {
        _classCallCheck(this, RegLink);

        return _possibleConstructorReturn(this, (RegLink.__proto__ || Object.getPrototypeOf(RegLink)).call(this, props));
    }

    _createClass(RegLink, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            console.log('update');
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('Mount');
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.props.logstatus) return null;
            return _react2.default.createElement(
                'a',
                { href: '/registration' },
                'registration'
            );
        }
    }]);

    return RegLink;
}(_react.Component);

var SignForm = function (_Component2) {
    _inherits(SignForm, _Component2);

    function SignForm(props) {
        _classCallCheck(this, SignForm);

        var _this2 = _possibleConstructorReturn(this, (SignForm.__proto__ || Object.getPrototypeOf(SignForm)).call(this, props));

        _this2.state = {
            logstatus: false
        };
        _this2.login = _this2.login.bind(_this2);
        _this2.logout = _this2.logout.bind(_this2);
        return _this2;
    }

    _createClass(SignForm, [{
        key: 'render',
        value: function render() {
            var logstatus = this.state.logstatus;
            var button = null;

            if (logstatus) button = _react2.default.createElement(LogOutButton, { onClick: this.logout });else button = _react2.default.createElement(LoginButton, { onClick: this.login });

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(Geet, { logstatus: this.state.logstatus }),
                button,
                _react2.default.createElement('br', null),
                _react2.default.createElement(RegLink, { logstatus: this.state.logstatus })
            );
        }
    }, {
        key: 'login',
        value: function login() {
            this.setState(function (prevState) {
                return { logstatus: !prevState.logstatus };
            });
        }
    }, {
        key: 'logout',
        value: function logout() {
            this.setState(function (prevState) {
                return { logstatus: !prevState.logstatus };
            });
        }
    }]);

    return SignForm;
}(_react.Component);

(0, _reactDom.render)(_react2.default.createElement(SignForm, null), document.getElementById('root'));

