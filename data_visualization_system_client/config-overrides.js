const {override, fixBabelImports, addLessLoader} = require('customize-cra') ;
// module.exports = function override(config, env) {
//     return config ;
// }

// 配置AntDesign，实现组件的按需加载
module.exports = override(
     fixBabelImports('import', {
         libraryName: 'antd',
         libraryDirectory: 'es',
         // style: 'css',
         style: true
       }),

    addLessLoader({
         javascriptEnabled: true,
         modifyVars: {
             // '@primary-color': '#1DA57A',
             '@label-color': '#fff',
             '@menu-bg': '#ccc',
             '@label-required-color': '#666',
             '@label-color': '#666',
             // '@menu-item-color': '#fff'
         },
    }),

);