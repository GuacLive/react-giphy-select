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

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var styles = {
  "select": "react-giphy-select__src-components-GiphySelect-styles__select___25GhN",
  "selectInput": "react-giphy-select__src-components-GiphySelect-styles__selectInput___18Wcj",
  "attribution": "react-giphy-select__src-components-GiphySelect-styles__attribution___1RUSw"
};

var GiphySelect = /*#__PURE__*/function (_Component) {
  _inherits(GiphySelect, _Component);

  var _super = _createSuper(GiphySelect);

  function GiphySelect(props) {
    var _this;

    _classCallCheck(this, GiphySelect);

    _this = _super.call(this, props);
    var theme = props.theme;
    _this.state = {
      items: []
    };
    _this.loadNextPage = _this.loadNextPage.bind(_assertThisInitialized(_this));
    _this._onQueryChange = _this._onQueryChange.bind(_assertThisInitialized(_this));
    _this._fetchItems = _this._fetchItems.bind(_assertThisInitialized(_this));
    _this._updateItems = _this._updateItems.bind(_assertThisInitialized(_this));
    _this._theme = _objectSpread({
      select: styles.select,
      selectInput: styles.selectInput,
      attribution: styles.attribution
    }, theme);
    _this._query = '';
    _this._requestTimer = null;
    _this._offset = 0;
    _this._totalCount = 0;
    _this._activeFetch = false;
    return _this;
  }

  _createClass(GiphySelect, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var autoFocus = this.props.autoFocus;

      this._fetchItems();

      setImmediate(function () {
        if (_this2.input && autoFocus) {
          _this2.input.focus();
        }
      });
    } // shouldComponentUpdate = () => !this._activeFetch

  }, {
    key: "loadNextPage",
    value: function loadNextPage() {
      if (this._offset < this._totalCount) {
        this._fetchItems();
      }
    }
  }, {
    key: "_onQueryChange",
    value: function _onQueryChange(e) {
      var _this3 = this;

      var requestDelay = this.props.requestDelay;
      var query = e.target.value.trim();

      if (this._requestTimer) {
        clearTimeout(this._requestTimer);
        this._requestTimer = null;
      }

      this._requestTimer = setTimeout(function () {
        if (query !== _this3._query) {
          _this3._query = query;
          _this3._offset = 0;
          _this3._activeFetch = true;

          _this3.setState({
            items: []
          });

          _this3._fetchItems();
        }
      }, requestDelay);
    }
  }, {
    key: "_fetchItems",
    value: function _fetchItems() {
      var _this$props = this.props,
          requestKey = _this$props.requestKey,
          requestLang = _this$props.requestLang,
          requestRating = _this$props.requestRating;
      var endpoint = '';

      if (this._query) {
        endpoint = "search?q=".concat(encodeURIComponent(this._query), "&");
      } else {
        endpoint = 'trending?';
      }

      var offset = this._offset; // eslint-disable-next-line no-restricted-globals

      fetch("".concat(location.protocol, "//api.giphy.com/v1/gifs/").concat(endpoint, "offset=").concat(offset, "&lang=").concat(requestLang, "&rating=").concat(requestRating, "&api_key=").concat(requestKey)).then(function (response) {
        return response.json();
      }).then(this._updateItems).catch(console.error); // eslint-disable-line no-console
    }
  }, {
    key: "_updateItems",
    value: function _updateItems(response) {
      this._activeFetch = false;
      this.setState(function (prevState) {
        return {
          items: [].concat(_toConsumableArray(prevState.items), _toConsumableArray(response.data))
        };
      });
      this._offset = response.pagination.offset + response.pagination.count;
      this._totalCount = response.pagination.total_count;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          placeholder = _this$props2.placeholder,
          renderEntry = _this$props2.renderEntry,
          onEntrySelect = _this$props2.onEntrySelect;
      var items = this.state.items;
      var theme = this._theme;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: theme.select
      }, /*#__PURE__*/_react.default.createElement("input", {
        className: theme.selectInput,
        placeholder: placeholder,
        onChange: this._onQueryChange
      }), /*#__PURE__*/_react.default.createElement(_GiphyList.default, {
        theme: theme,
        items: items,
        renderEntry: renderEntry,
        onEntrySelect: onEntrySelect,
        loadNextPage: this.loadNextPage
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: theme.attribution
      }, "Powered by Giphy"));
    }
  }]);

  return GiphySelect;
}(_react.Component);

exports.default = GiphySelect;
GiphySelect.defaultProps = {
  theme: {},
  placeholder: 'Search GIFs',
  requestDelay: 500,
  requestKey: 'dc6zaTOxFJmzC',
  requestLang: '',
  requestRating: 'pg',
  renderEntry: _GiphyList.default.defaultProps.renderEntry,
  autoFocus: false,
  onEntrySelect: _GiphyList.default.defaultProps.onEntrySelect
};
GiphySelect.propTypes = {
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
};