/*
 * @Author: your name
 * @Date: 2020-03-31 11:20:25
 * @LastEditTime: 2020-03-31 11:24:26
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \kaoyan\vue.config.js
 */
const path = require("path");
// var data = require('./public/data.json')
function resolve(dir) {
  return path.join(__dirname, dir); //path.join(__dirname)设置绝对路径
}

module.exports = {
  publicPath: "./", // 默认'/'，部署应用包时的基本 URL
  outputDir: "dist", // 'dist', 生产环境构建文件的目录
  assetsDir: "", // 相对于outputDir的静态资源(js、css、img、fonts)目录
  lintOnSave: false,
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: false, // 生产环境的 source map
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("./src"))
      .set("components", resolve("./src/components"));
    //set第一个参数：设置的别名，第二个参数：设置的路径
  },
  devServer: {
        // overlay: {
        //   warnings: true,
        //   errors: true
        // },
        open: false,
        host: '192.168.18.12',
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: false,
        /* before (app) {
          app.get('http://test.jun666.cn/data.json', (req, res) => {
            console.log(res);
          })
        }, */
        /* proxy: {
            '/api': {
                target: "http://localhost:6000",
                changeOrigin: true,
                ws: true, // proxy websockets
                pathRewrite: { //重写路径
                    "^/api": ''
                }
            }
        } */
    }
};
