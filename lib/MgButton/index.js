"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _indexModule = _interopRequireDefault(require("./index.module.less"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Author: Chris
 * @Date: 2020-07-02 20:12:37
 * @LastEditors: Chris
 * @LastEditTime: 2020-07-03 17:02:48
 * @Descripttion: **
 */
var MgButton = function MgButton(props) {
  var bordered = props.bordered,
      type = props.type;
  var custom = {
    ghost: {
      color: '#1890ff',
      background: '#fff',
      border: bordered ? '1px solid #1890ff' : 'none'
    },
    default: {
      color: '#fff',
      background: '#1890ff',
      border: bordered ? '1px solid #1890ff' : 'none'
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _indexModule.default.container
  }, "aaaaaaaaaaa", /*#__PURE__*/_react.default.createElement("div", {
    style: custom[type],
    className: _indexModule.default.btn
  }, props.children));
};

MgButton.propTypes = {
  /**
   * type只能是ghost或default中的一个.
   */
  type: _propTypes.default.oneOf(['ghost', 'default']),
  bordered: _propTypes.default.bool
};
MgButton.defaultProps = {
  type: 'default',
  bordered: true
};
var _default = MgButton;
exports.default = _default;