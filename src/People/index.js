/*
 * @Author: Chris
 * @Date: 2020-04-28 14:25:39
 * @LastEditors: Chris
 * @LastEditTime: 2020-04-30 15:58:33
 * @Descripttion: **
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.less';
import { Button } from 'antd';

class People extends Component {
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
   return(
    <div className={styles.people}>
      <div className={styles.name}>name:{this.props.name}，{this.props.children}</div>
      <div className={styles.age}>age:{this.props.age}</div>
      <Button type='primary' size='large'>antdButton</Button>

    </div>
   )
 }
}
// const People = ({ name, age, children }) => {
//   return (
//     <div className={styles.people}>
//       <div className={styles.name}>name:{name}</div>
//       {{children}}
//       <div className={styles.age}>age:{age}</div>
//     </div>
//   )
// }

People.propTypes = {
  name: PropTypes.oneOfType([ PropTypes.number, PropTypes.oneOf(['名字', 'mingzi'])]).isRequired,
  age: PropTypes.number,
}

People.defaultProps = {
  name: 'mingzi',
  age: 20
}

export default People