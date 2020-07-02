/*
 * @Author: Chris
 * @Date: 2020-04-28 14:25:39
 * @LastEditors: Chris
 * @LastEditTime: 2020-07-02 21:19:47
 * @Descripttion: **
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.less';
import { Button } from 'antd';

class AntdButton extends Component {
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
   return(
    <div className={styles.conatiner}>
      <Button {...this.props}>{this.props.children}</Button>
    </div>
   )
 }
}

AntdButton.propTypes = {
  name: PropTypes.oneOfType([ PropTypes.number, PropTypes.oneOf(['名字', 'mingzi'])]).isRequired,
  age: PropTypes.number,
}

AntdButton.defaultProps = {
  name: 'mingzi',
  age: 20
}

export default AntdButton