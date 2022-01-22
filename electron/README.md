基于cookie会失效，而学校的auth2系统升级了过于变态，所以用模拟手动输入点击的方式是最有效的

###
修改`userinfo.js`里面的`username`和`password`

### 安装依赖
```sh
npm install
```

### 运行
```sh
npm start
```

### 打包
```sh
# linux64
npm run package_linux
# macos
npm run package_macos
# win32
npm run package_win32
# win64
npm run package_win64
```

打包完成后会在out目录下生成可执行文件，通过设置定时脚本就可以定时打卡啦

### 打包后在linux用命令行运行

```sh
# 先安装虚拟桌面
sudo apt update
sudo apt upgrade
sudo apt-get install -y \
    wget \
    unzip \
    libgtk-3-0 \
    xvfb \
    libxss1 \
    libnss3 \
    libasound2
    libgbm-dev

# 启动虚拟桌面
Xvfb -ac -screen scrn 1280x2000x24 :9.0 &

# 在虚拟桌面运行
export DISPLAY=:9.0
./health
```