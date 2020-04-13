# kaoyan1

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).




npm install     
/*
如果卡住 尝试ctrl+C停止 运行下面代码后再次尝试install
npm config set registry https://registry.npm.taobao.org 
npm info underscore
*/

npm run serve //本地调试

npm run build //我理解是编译

/*
安装阿里云推荐的上传工具putty
*/

在命令提示符中
pscp -r 包目录名\dist root@39.100.232.83:/home 
输入密码M46isGupaRmp

/*
此步骤有高风险 误操作可能造成服务器内文件无法恢复的损坏
请务必保证所有操作中目标文件夹必须是root@39.100.232.83:/home
不允许变动 

如没有自信请提前备份 代码含义：
pscp 文件传输 
-r  递归 可传文件夹
文件夹名
用户名@ip地址：目标文件夹

如尝试备份 可远程登陆服务器 密码同上
将根目录中home文件夹下dist文件夹打包压缩
cd home
zip -r dist_old[编号].zip dist
代码含义：将 dist 文件夹压缩到 dist_old[编号自定].zip

*/
