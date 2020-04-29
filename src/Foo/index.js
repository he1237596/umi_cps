/*
 * @Author: Chris
 * @Date: 2020-04-28 11:44:38
 * @LastEditors: Chris
 * @LastEditTime: 2020-04-28 19:03:26
 * @Descripttion: **
 */
import * as React from 'react';

export default function(props) {
  return (
    <button
      style={{
        fontSize: props.size === 'large' ? 40 : 20,
      }}
    >
      { props.children }
    </button>
  );
}