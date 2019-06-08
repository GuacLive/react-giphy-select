"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("isomorphic-fetch");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _GiphyList = _interopRequireDefault(require("../GiphyList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
  "select": "react-giphy-select__src-components-GiphySelect-styles__select___25GhN",
  "selectInput": "react-giphy-select__src-components-GiphySelect-styles__selectInput___18Wcj",
  "attribution": "react-giphy-select__src-components-GiphySelect-styles__attribution___1RUSw"
};

var GiphySelect =
/*#__PURE__*/
function (_Component) {
  _inherits(GiphySelect, _Component);

  function GiphySelect() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, GiphySelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GiphySelect)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      items: []
    });

    _defineProperty(_assertThisInitialized(_this), "shouldComponentUpdate", function () {
      return !_this._activeFetch;
    });

    _defineProperty(_assertThisInitialized(_this), "loadNextPage", function () {
      if (_this._offset < _this._totalCount) {
        _this._fetchItems();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_onQueryChange", function (e) {
      var query = e.target.value.trim();

      if (_this._requestTimer) {
        clearTimeout(_this._requestTimer);
        _this._requestTimer = null;
      }

      _this._requestTimer = setTimeout(function () {
        if (query !== _this._query) {
          _this._query = query;
          _this._offset = 0;
          _this._activeFetch = true;

          _this.setState({
            items: []
          });

          _this._fetchItems();
        }
      }, _this.props.requestDelay);
    });

    _defineProperty(_assertThisInitialized(_this), "_onWheel", function (e) {
      return e.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "_fetchItems", function () {
      var _this$props = _this.props,
          requestKey = _this$props.requestKey,
          requestLang = _this$props.requestLang,
          requestRating = _this$props.requestRating;
      var endpoint = '';

      if (_this._query) {
        endpoint = "search?q=".concat(encodeURIComponent(_this._query), "&");
      } else {
        endpoint = 'trending?';
      }

      var offset = _this._offset;
      fetch("".concat(location.protocol, "//api.giphy.com/v1/gifs/").concat(endpoint, "offset=").concat(offset, "&lang=").concat(requestLang, "&rating=").concat(requestRating, "&api_key=").concat(requestKey)).then(function (response) {
        return response.json();
      }).then(_this._updateItems).catch(console.error); // eslint-disable-line no-console
    });

    _defineProperty(_assertThisInitialized(_this), "_updateItems", function (response) {
      _this._activeFetch = false;

      _this.setState(function (prevState) {
        return {
          items: [].concat(_toConsumableArray(prevState.items), _toConsumableArray(response.data))
        };
      });

      _this._offset = response.pagination.offset + response.pagination.count;
      _this._totalCount = response.pagination.total_count;
    });

    _defineProperty(_assertThisInitialized(_this), "_setInputRef", function (input) {
      _this.input = input;
    });

    _defineProperty(_assertThisInitialized(_this), "_theme", _objectSpread({
      select: styles.select,
      selectInput: styles.selectInput,
      attribution: styles.attribution
    }, _this.props.theme));

    _defineProperty(_assertThisInitialized(_this), "_query", '');

    _defineProperty(_assertThisInitialized(_this), "_requestTimer", null);

    _defineProperty(_assertThisInitialized(_this), "_offset", 0);

    _defineProperty(_assertThisInitialized(_this), "_totalCount", 0);

    _defineProperty(_assertThisInitialized(_this), "_activeFetch", false);

    return _this;
  }

  _createClass(GiphySelect, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._fetchItems();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setImmediate(function () {
        if (_this2.input && _this2.props.autoFocus) {
          _this2.input.focus();
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          placeholder = _this$props2.placeholder,
          renderEntry = _this$props2.renderEntry,
          onEntrySelect = _this$props2.onEntrySelect;
      var theme = this._theme;
      return _react.default.createElement("div", {
        className: theme.select,
        onWheel: this._onWheel
      }, _react.default.createElement("input", {
        className: theme.selectInput,
        placeholder: placeholder,
        ref: this._setInputRef,
        onChange: this._onQueryChange
      }), _react.default.createElement(_GiphyList.default, {
        theme: theme,
        items: this.state.items,
        renderEntry: renderEntry,
        onEntrySelect: onEntrySelect,
        loadNextPage: this.loadNextPage
      }), _react.default.createElement("div", {
        className: theme.attribution
      }, "Powered by Giphy"));
    }
  }]);

  return GiphySelect;
}(_react.Component);

exports.default = GiphySelect;

_defineProperty(GiphySelect, "propTypes", {
  theme: _propTypes.default.shape({
    select: _propTypes.default.string,
    selectInput: _propTypes.default.string,
    attribution: _propTypes.default.string
  }),
  placeholder: _propTypes.default.string,
  requestDelay: _propTypes.default.number,
  requestKey: _propTypes.default.string,
  requestLang: _propTypes.default.string,
  requestRating: _propTypes.default.string,
  renderEntry: _propTypes.default.func,
  autoFocus: _propTypes.default.bool,
  onEntrySelect: _propTypes.default.func
});

_defineProperty(GiphySelect, "defaultProps", {
  theme: {},
  placeholder: 'Search GIFs',
  requestDelay: 500,
  requestKey: 'dc6zaTOxFJmzC',
  requestLang: '',
  requestRating: 'pg',
  renderEntry: _GiphyList.default.defaultProps.renderEntry,
  autoFocus: false,
  onEntrySelect: _GiphyList.default.defaultProps.onEntrySelect
});