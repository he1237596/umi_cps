umi_cps

# 使用

## 1.安装
``` js
npm install @alex_xu/xui
```
或者用yarn安装
``` js
yarn add @alex_xu/xui
```
## 2. 使用

## 3.调试
本地调试修改.fatherrc.js(否则不会生成dist文件，找不到包入口)；
发布远程时改回rollup否则无法使用es6引入包
```js
{
  esm: 'babel',
  cjs: 'babel',
}
```