"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/empty/style");

var _empty = _interopRequireDefault(require("antd/es/empty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = _interopRequireDefault(require("./index.less"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var NormalEmpty = /*#__PURE__*/function (_Component) {
  _inherits(NormalEmpty, _Component);

  var _super = _createSuper(NormalEmpty);

  function NormalEmpty() {
    var _this;

    _classCallCheck(this, NormalEmpty);

    _this = _super.call(this);

    _this.componentDidMount = function () {
      var height = _this.props.height;

      if (!height) {
        // height不存在或者为0
        window.addEventListener('resize', _this.setContentHeight);
      }
    };

    _this.componentWillUnmount = function () {
      var height = _this.props.height;

      if (!height) {
        window.removeEventListener('resize', _this.setContentHeight);
      }
    };

    _this.setContentHeight = function () {
      _this.thro(function () {
        _this.setState({
          contentHeight: document.body.clientHeight
        });
      }, 400);
    };

    _this.thro = function (func, ms) {
      if (_this.timeout) {
        clearTimeout(_this.timeout);
      }

      _this.timeout = setTimeout(func, ms);
    };

    _this.state = {
      contentHeight: document.body.clientHeight
    };
    _this.timeout = null;
    return _this;
  }

  _createClass(NormalEmpty, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          DelWidth = _this$props.DelWidth,
          height = _this$props.height,
          _this$props$transitio = _this$props.transition,
          transition = _this$props$transitio === void 0 ? 'all .5s' : _this$props$transitio,
          restProps = _objectWithoutProperties(_this$props, ["DelWidth", "height", "transition"]);

      var contentHeight = this.state.contentHeight;
      var innerHeight = height || "".concat(contentHeight - 64 - DelWidth, "px");
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          height: "".concat(innerHeight),
          width: '100%',
          position: 'relative',
          transition: transition
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        },
        className: _index.default.innerEmpty
      }, /*#__PURE__*/_react.default.createElement(_empty.default, restProps)));
    }
  }]);

  return NormalEmpty;
}(_react.Component);

exports.default = NormalEmpty;
NormalEmpty.defaultProps = {
  height: undefined,
  DelWidth: 0
};
NormalEmpty.propTypes = {
  height: _propTypes.default.string,
  DelWidth: _propTypes.default.number
};