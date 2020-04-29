/*
 * @Author: Chris
 * @Date: 2020-04-28 11:44:38
 * @LastEditors: Chris
 * @LastEditTime: 2020-04-29 18:32:50
 * @Descripttion: **
 */
// import * as React from 'react';

// export default function(props) {
//   return (
//     <button
//       style={{
//         fontSize: props.size === 'large' ? 40 : 20,
//       }}
//     >
//       { props.children }
//     </button>
//   );
// }
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Demo extends Component {
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
  
   return(
    <button
      style={{
        fontSize: this.props.size === 'large' ? 40 : 20,
      }}
    >
      { this.props.children }
    </button>
   )
 }
}

Demo.propTypes = {
  name: PropTypes.oneOfType([ PropTypes.number, PropTypes.oneOf(['名字', 'mingzi'])]).isRequired,
  age: PropTypes.number,
}

Demo.defaultProps = {
  name: 'mingzi',
  age: 20
}

export default Demo;

// export default function(props) {
//   return (
//     <button
//       style={{
//         fontSize: props.size === 'large' ? 40 : 20,
//       }}
//     >
//       { props.children }
//     </button>
//   );
// }