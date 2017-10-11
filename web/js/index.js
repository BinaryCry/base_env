'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var posts = [{
    id: 765,
    title: 'Title 1',
    thumb: '/img/Doc.jpg'
}, {
    id: 321,
    title: 'Title 2',
    thumb: '/img/Rocky.png'
}];

function PostImg(props) {
    return _react2.default.createElement('img', { src: props.src, alt: '' });
}

function Post(props) {
    return _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
            'p',
            null,
            props.data.title
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(PostImg, { src: props.data.thumb })
        )
    );
}

var News = function (_Component) {
    _inherits(News, _Component);

    function News(props) {
        _classCallCheck(this, News);

        return _possibleConstructorReturn(this, (News.__proto__ || Object.getPrototypeOf(News)).call(this, props));
    }

    _createClass(News, [{
        key: 'render',
        value: function render() {
            var posts = this.props.data.map(function (item) {
                return _react2.default.createElement(Post, { key: item.id, data: item });
            });

            return _react2.default.createElement(
                'ul',
                null,
                posts
            );
        }
    }]);

    return News;
}(_react.Component);

(0, _reactDom.render)(_react2.default.createElement(News, { data: posts }), document.getElementById('root'));

