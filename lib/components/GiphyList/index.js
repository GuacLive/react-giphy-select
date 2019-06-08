"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCustomScrollbars = require("react-custom-scrollbars");

var _reactMasonryComponent = _interopRequireDefault(require("react-masonry-component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "list": "react-giphy-select__src-components-GiphyList-styles__list___Tdg5X",
  "listEmpty": "react-giphy-select__src-components-GiphyList-styles__listEmpty___1SDRT react-giphy-select__src-components-GiphyList-styles__list___Tdg5X",
  "listScrollbar": "react-giphy-select__src-components-GiphyList-styles__listScrollbar___1dS3n",
  "listScrollbarThumb": "react-giphy-select__src-components-GiphyList-styles__listScrollbarThumb___1L0ZG",
  "listMasonry": "react-giphy-select__src-components-GiphyList-styles__listMasonry___3rIoZ",
  "listItem": "react-giphy-select__src-components-GiphyList-styles__listItem___2RULM",
  "listEntry": "react-giphy-select__src-components-GiphyList-styles__listEntry___D_T4j",
  "listEntryImage": "react-giphy-select__src-components-GiphyList-styles__listEntryImage___1oyhk"
};

var GiphyList =
/*#__PURE__*/
function (_Component) {
  _inherits(GiphyList, _Component);

  function GiphyList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, GiphyList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GiphyList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "_onScroll", function (values) {
      if (values.top === 1) {
        _this.props.loadNextPage();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_onWheel", function (e) {
      // Disable page scroll, but enable gifs scroll
      var _this$_scrollbars$get = _this._scrollbars.getValues(),
          clientHeight = _this$_scrollbars$get.clientHeight,
          scrollHeight = _this$_scrollbars$get.scrollHeight,
          scrollTop = _this$_scrollbars$get.scrollTop;

      if (e.deltaY > 0) {
        if (scrollTop < scrollHeight - clientHeight - e.deltaY) {
          e.stopPropagation();
        } else {
          _this._scrollbars.scrollToBottom();
        }
      } else {
        if (scrollTop > -e.deltaY) {
          // eslint-disable-line no-lonely-if
          e.stopPropagation();
        } else {
          _this._scrollbars.scrollTop();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_theme", _objectSpread({
      list: styles.list,
      listEmpty: styles.listEmpty,
      listScrollbar: styles.listScrollbar,
      listScrollbarThumb: styles.listScrollbarThumb,
      listMasonry: styles.listMasonry,
      listItem: styles.listItem,
      listEntry: styles.listEntry,
      listEntryImage: styles.listEntryImage
    }, _this.props.theme));

    return _this;
  }

  _createClass(GiphyList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          items = _this$props.items,
          onEntrySelect = _this$props.onEntrySelect;
      var theme = this._theme;
      return _react.default.createElement("div", {
        className: items.length ? theme.list : theme.listEmpty,
        onWheel: this._onWheel
      }, _react.default.createElement(_reactCustomScrollbars.Scrollbars, {
        onScrollFrame: this._onScroll,
        renderTrackVertical: function renderTrackVertical() {
          return _react.default.createElement("div", {
            className: theme.listScrollbar
          });
        },
        renderThumbVertical: function renderThumbVertical(props) {
          return _react.default.createElement("div", _extends({}, props, {
            className: theme.listScrollbarThumb
          }));
        },
        hideTracksWhenNotNeeded: true,
        ref: function ref(element) {
          _this2._scrollbars = element;
        }
      }, _react.default.createElement(_reactMasonryComponent.default, {
        className: theme.listMasonry,
        role: "listbox"
      }, items.map(function (entry) {
        return _react.default.createElement("div", {
          key: entry.id,
          className: theme.listItem
        }, _this2.props.renderEntry(entry, onEntrySelect, {
          theme: theme
        }));
      }))));
    }
  }]);

  return GiphyList;
}(_react.Component);

exports.default = GiphyList;

_defineProperty(GiphyList, "propTypes", {
  theme: _propTypes.default.shape({
    list: _propTypes.default.string,
    listScrollbar: _propTypes.default.string,
    listScrollbarThumb: _propTypes.default.string,
    listMasonry: _propTypes.default.string,
    listItem: _propTypes.default.string,
    listEntry: _propTypes.default.string,
    listEntryImage: _propTypes.default.string
  }),
  items: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,
  renderEntry: _propTypes.default.func,
  onEntrySelect: _propTypes.default.func,
  loadNextPage: _propTypes.default.func.isRequired
});

_defineProperty(GiphyList, "defaultProps", {
  theme: {},
  renderEntry: function renderEntry(entry, onSelect, options) {
    return _react.default.createElement("button", {
      className: options.theme.listEntry,
      style: {
        width: "".concat(entry.images.fixed_width_small.width, "px"),
        height: "".concat(entry.images.fixed_width_small.height, "px"),
        backgroundImage: "url(".concat(entry.images.fixed_width_small_still.url, ")")
      },
      onClick: function onClick() {
        return onSelect(entry);
      },
      role: "option",
      "aria-selected": true
    }, _react.default.createElement("img", {
      className: options.theme.listEntryImage,
      src: entry.images.fixed_width_small.url,
      width: entry.images.fixed_width_small.width,
      height: entry.images.fixed_width_small.height,
      alt: entry.slug
    }));
  },
  onEntrySelect: function onEntrySelect() {}
});