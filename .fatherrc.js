/*
 * @Author: Chris
 * @Date: 2020-04-28 11:37:08
 * @LastEditors: Chris
 * @LastEditTime: 2020-04-29 19:06:35
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
  cssModules: true,
  cssModules: {
    generateScopedName: 'mglinker_[name]__[local]___[hash:base64:5]',
  },
  // namedExports:{
  // 'react': ['createElement', 'Component' ],
  // 'node_modules/react/cjs/react.development.js': ['createElement', 'Component'],
  // }，
  extraRollupPlugins: [
    commonjs({
      // include: 'node_modules/**',
      // namedExports: { 'react': ['createElement', 'Component', 'Fragment', 'createContext', 'useContext', 'useEffect', 'useMemo', 'useRef', 'useState', 'forwardRef', 'Suspense', 'useCallback', 'memo' ] },
      namedExports: { 'react': ['createElement', 'Component'] },
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