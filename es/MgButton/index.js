/*
 * @Author: Chris
 * @Date: 2020-07-02 20:12:37
 * @LastEditors: Chris
 * @LastEditTime: 2020-07-03 17:02:48
 * @Descripttion: **
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.less';

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
  return /*#__PURE__*/React.createElement("div", {
    className: styles.container
  }, "aaaaaaaaaaa", /*#__PURE__*/React.createElement("div", {
    style: custom[type],
    className: styles.btn
  }, props.children));
};

MgButton.propTypes = {
  /**
   * type只能是ghost或default中的一个.
   */
  type: PropTypes.oneOf(['ghost', 'default']),
  bordered: PropTypes.bool
};
MgButton.defaultProps = {
  type: 'default',
  bordered: true
};
export default MgButton;