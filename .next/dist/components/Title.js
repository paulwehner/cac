'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/paulme/Documents/hackathon/dappathon/dev/custom-server-express/components/Title.js';


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$color = _props.color,
          color = _props$color === undefined ? 'white' : _props$color,
          _props$type = _props.type,
          type = _props$type === undefined ? '' : _props$type,
          style = _props.style;

      return _react2.default.createElement('div', { className: "text-lig title " + color + ' ' + type, style: style, 'data-jsx': 459114657,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, this.props.children, _react2.default.createElement(_style2.default, {
        styleId: 459114657,
        css: '.title[data-jsx="459114657"]{font-size:45px;margin:0 auto;text-align:center;padding-top:40px;padding-bottom:20px}.title.sub[data-jsx="459114657"]{font-size:30px;padding-top:24px;padding-bottom:0px;text-transform:uppercase}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGl0bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUW9CLEFBRzRCLEFBT0EsZUFORCxBQU9HLGNBTkMsR0FPQyxlQU5GLElBT00sYUFOSCxZQU90QixRQU5BIiwiZmlsZSI6ImNvbXBvbmVudHMvVGl0bGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BhdWxtZS9Eb2N1bWVudHMvaGFja2F0aG9uL2RhcHBhdGhvbi9kZXYvY3VzdG9tLXNlcnZlci1leHByZXNzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbG9yID0gJ3doaXRlJywgdHlwZSA9ICcnLCBzdHlsZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInRleHQtbGlnIHRpdGxlIFwiK2NvbG9yKycgJyt0eXBlfSBzdHlsZT17c3R5bGV9PlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZS5zdWIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDI0cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuXHRcdCAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=components/Title.js */'
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;