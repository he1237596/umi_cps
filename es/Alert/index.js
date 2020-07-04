function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from "react";
import { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './index.less';
/**
 * 警告提示组件
 * @param {style} object 更改Alert样式
 * @param {closable} bool 是否显示关闭按钮, 默认不显示
 * @param {closeText} string|reactNode 自定义关闭按钮
 * @param {message} string 警告提示内容
 * @param {description} string 警告提示的辅助性文字
 * @param {type} string 警告的类型
 * @param {onClose} func 关闭时触发的事件
 */

function Alert(props) {
  var style = props.style,
      closable = props.closable,
      closeText = props.closeText,
      message = props.message,
      description = props.description,
      type = props.type,
      onClose = props.onClose;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var handleColse = function handleColse() {
    setVisible(false);
    onClose && onClose();
  };

  return visible ? /*#__PURE__*/React.createElement("div", {
    className: classnames('xAlertWrap', type || 'warning'),
    style: _objectSpread({
      opacity: visible ? '1' : '0'
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    className: "alertMes"
  }, message), /*#__PURE__*/React.createElement("div", {
    className: "alertDesc"
  }, description), !!closable && /*#__PURE__*/React.createElement("span", {
    className: "closeBtn",
    onClick: handleColse
  }, closeText ? closeText : 'x')) : null;
}

Alert.propTypes = {
  style: PropTypes.object,
  closable: PropTypes.bool,
  closeText: PropTypes.string,
  message: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  onClose: PropTypes.func
};
export default Alert;