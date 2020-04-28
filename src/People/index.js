/*
 * @Author: Chris
 * @Date: 2020-04-28 14:25:39
 * @LastEditors: Chris
 * @LastEditTime: 2020-04-28 18:00:12
 * @Descripttion: **
 */
import React, { Component } from 'react';
import { Playground, Props } from 'docz';
import PropTypes from 'prop-types';
class People extends Component {
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
   return(
    <div>
      <div>name:{this.props.name}，{this.props.children}</div>
      <div>age:{this.props.age}</div>
    </div>
   )
 }
}
// const People = ({ name, age, children }) => {
//   return (
//     <div>
//       <div>name:{name}，{children}</div>
//       <div>age:{age}</div>
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