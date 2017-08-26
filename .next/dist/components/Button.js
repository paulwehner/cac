'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/paulme/Documents/hackathon/dappathon/dev/custom-server-express/components/Button.js';


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
          _props$backgroundColo = _props.backgroundColor,
          backgroundColor = _props$backgroundColo === undefined ? 'blue' : _props$backgroundColo,
          _props$emoji = _props.emoji,
          emoji = _props$emoji === undefined ? '' : _props$emoji,
          _props$emojiDown = _props.emojiDown,
          emojiDown = _props$emojiDown === undefined ? '' : _props$emojiDown,
          _props$disabled = _props.disabled,
          disabled = _props$disabled === undefined ? false : _props$disabled,
          _props$loading = _props.loading,
          loading = _props$loading === undefined ? false : _props$loading;

      var classes = backgroundColor + 'Background text-reg white';
      if (disabled) {
        classes += ' disabled';
      }
      if (!emojiDown || emojiDown.length < 1) {
        emojiDown = emoji;
      }

      var spinnerClass = '';
      if (loading) {
        spinnerClass = ' visible';
      }

      return _react2.default.createElement('div', { className: 'button ' + classes, onClick: this.props.onClick, 'data-jsx': 514042059,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, emoji ? _react2.default.createElement('span', { className: 'container', 'data-jsx': 514042059,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('span', { className: 'emoji', 'data-jsx': 514042059,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, emoji), _react2.default.createElement('span', { className: 'emojiDown', 'data-jsx': 514042059,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, emojiDown)) : '', this.props.children, _react2.default.createElement('div', { className: "spinner" + spinnerClass, 'data-jsx': 514042059,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: 514042059,
        css: '.spinner[data-jsx="514042059"]{position:absolute;right:50px;top:50%;margin-top:-5px;visibility:hidden}.spinner.visible[data-jsx="514042059"]{visibility:visible}.button[data-jsx="514042059"]{position:relative;text-transform:uppercase;line-height:50px;font-size:30px;border-radius:100px;padding-top:12px;padding-bottom:14px;margin:12px 0px;text-align:center;cursor:pointer;box-shadow:0px 2px rgba(0,0,0,.2)}.button[data-jsx="514042059"]:active{position:relative;top:1px;left:1px}.container[data-jsx="514042059"]{padding-right:10px;font-size:45px;position:relative;top:5px}.emojiDown[data-jsx="514042059"]{display:none}.button[data-jsx="514042059"]:active .emoji[data-jsx="514042059"]{display:none}.button[data-jsx="514042059"]:active .emojiDown[data-jsx="514042059"]{display:inline}.disabled[data-jsx="514042059"]{opacity:.25;cursor:default}.disabled.button[data-jsx="514042059"]:active{position:relative;top:0px;left:0px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCb0IsQUFHK0IsQUFPQyxBQUdELEFBYUEsQUFLQyxBQU1QLEFBR0EsQUFHRSxBQUdGLEFBSU0sWUFISCxDQVRqQixBQUdBLEVBR0EsR0F4Q2EsQUFVWSxBQWFmLEFBd0JBLENBeENWLEFBcUJpQixPQUpOLEFBd0JBLENBSlgsRUEzQ1UsS0E0QlMsQ0FKbkIsQUF3QkEsRUEvQ2tCLE1BU0MsU0FtQlQsQ0EzQlUsT0FTSCxBQW1CakIsV0EzQkEsSUFTc0Isb0JBQ0gsaUJBQ0csb0JBQ0osZ0JBQ0Usa0JBQ0osZUFDb0Isa0NBQ3BDIiwiZmlsZSI6ImNvbXBvbmVudHMvQnV0dG9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wYXVsbWUvRG9jdW1lbnRzL2hhY2thdGhvbi9kYXBwYXRob24vZGV2L2N1c3RvbS1zZXJ2ZXItZXhwcmVzcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgYmFja2dyb3VuZENvbG9yID0gJ2JsdWUnLCBlbW9qaT0nJywgZW1vamlEb3duPScnLCBkaXNhYmxlZD1mYWxzZSwgbG9hZGluZz1mYWxzZSB9ID0gdGhpcy5wcm9wc1xuICAgIGxldCBjbGFzc2VzID0gYmFja2dyb3VuZENvbG9yKydCYWNrZ3JvdW5kIHRleHQtcmVnIHdoaXRlJztcbiAgICBpZihkaXNhYmxlZCl7XG4gICAgICBjbGFzc2VzICs9ICcgZGlzYWJsZWQnO1xuICAgIH1cbiAgICBpZighZW1vamlEb3duIHx8IGVtb2ppRG93bi5sZW5ndGg8MSl7XG4gICAgICBlbW9qaURvd24gPSBlbW9qaTtcbiAgICB9XG5cbiAgICBsZXQgc3Bpbm5lckNsYXNzPScnXG4gICAgaWYobG9hZGluZyl7XG4gICAgICBzcGlubmVyQ2xhc3M9JyB2aXNpYmxlJ1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17J2J1dHRvbiAnK2NsYXNzZXN9IG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja30+XG4gICAgICAgIHtlbW9qaT88c3BhbiBjbGFzc05hbWU9J2NvbnRhaW5lcic+PHNwYW4gY2xhc3NOYW1lPSdlbW9qaSc+e2Vtb2ppfTwvc3Bhbj48c3BhbiBjbGFzc05hbWU9J2Vtb2ppRG93bic+e2Vtb2ppRG93bn08L3NwYW4+PC9zcGFuPjonJ317dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic3Bpbm5lclwiK3NwaW5uZXJDbGFzc30+PC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuc3Bpbm5lciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogNTBweDtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNwaW5uZXIudmlzaWJsZSB7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHQgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTJweCAwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggcmdiYSgwLDAsMCwuMik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5idXR0b246YWN0aXZlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogMXB4O1xuICAgICAgICAgICAgbGVmdDogMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZW1vamlEb3duIHtcbiAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJ1dHRvbjphY3RpdmUgLmVtb2ppIHtcbiAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJ1dHRvbjphY3RpdmUgLmVtb2ppRG93biB7XG4gICAgICAgICAgICBkaXNwbGF5OmlubGluZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRpc2FibGVkIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IC4yNTtcbiAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRpc2FibGVkLmJ1dHRvbjphY3RpdmUge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/Button.js */'
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;