/*
 * @Author: Chris
 * @Date: 2020-07-02 20:12:37
 * @LastEditors: Chris
 * @LastEditTime: 2020-07-02 21:26:00
 * @Descripttion: **
 */ 
import React from 'react'
import PropTypes from 'prop-types';
import styles from './index.module.less';

const MgButton = (props) => {
  const {bordered, type} = props;
  const custom = {
    ghost: {
      color: '#1890ff',
      background: '#fff',
      border: bordered ? '1px solid #1890ff': 'none',
    },
    default: {
      color: '#fff',
      background: '#1890ff',
      border: bordered ? '1px solid #1890ff': 'none',
    }
  }
  return <div className={styles.container}>
    <div style={custom[type]} className={styles.btn}>{props.children}</div>
  </div>
}

MgButton.propTypes = {
  /**
   * type只能是ghost或default中的一个.
   */
  type: PropTypes.oneOf(['ghost', 'default']),
  bordered: PropTypes.bool,
}

MgButton.defaultProps = {
  type: 'default',
  bordered: true
}
export default MgButton;