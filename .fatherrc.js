/*
 * @Author: Chris
 * @Date: 2020-04-28 11:37:08
 * @LastEditors: Chris
 * @LastEditTime: 2020-04-28 21:01:17
 * @Descripttion: **
 */
import commonjs from 'rollup-plugin-commonjs';
export default {
  entry: 'src/index.js',
  esm: 'rollup',
  cjs: 'rollup',
  doc: {
    base: '/umi_cps',
  },
  // namedExports:{
    // 'react': ['createElement', 'Component' ],
    // 'node_modules/react/cjs/react.development.js': ['createElement', 'Component'],
  // }，
  extraRollupPlugins:[
    commonjs({
      namedExports: { 'react': ['createElement', 'Component' ] },
    })
  ]
  // cjs: 'rollup',
  // extraBabelPlugins:[
  //   ['babel-plugin-import', {
  //     libraryName: 'antd',
  //     libraryDirectory: 'es',
  //     style: true,
  //   }],
  // ],
}