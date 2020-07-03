/*
 * @Author: Chris
 * @Date: 2020-04-28 11:37:08
 * @LastEditors: Chris
 * @LastEditTime: 2020-07-03 21:53:18
 * @Descripttion: **
 */
import commonjs from 'rollup-plugin-commonjs';
export default {
  entry: 'src/index.js',
  esm: 'babel',
  cjs: 'babel', 
  doc: {
    base: '/umi_cps',
  },
  cssModules: false,
  // cssModules: {
  //   generateScopedName: 'mglinker_[name]__[local]___[hash:base64:5]',
  // },
  // extractCSS: true,
  extraRollupPlugins: [
    commonjs({
      // include: 'node_modules/**',
      // namedExports: { 'react': ['createElement', 'Component', 'Fragment', 'createContext', 'useContext', 'useEffect', 'useMemo', 'useRef', 'useState', 'forwardRef', 'Suspense', 'useCallback', 'memo' ] },
      namedExports: { 'react': ['createElement', 'Component'] },
    })
  ],
  extraBabelPlugins: [
    ['babel-plugin-import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }],
  ],
  // cjs: 'rollup',
}