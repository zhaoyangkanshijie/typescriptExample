// 引入一个包
const fs = require("fs");
const path = require('path');
const webpack = require('webpack');

let entries = {};

function travel(basePath, callback) {
    fs.readdirSync(basePath)
        .forEach((file) => {
            let filePath = path.join(basePath, file)
            if (fs.statSync(filePath).isDirectory()) {
                // 如果是文件夹则递归继续
                travel(filePath, callback)
            } else {
                callback(filePath, file)
            }
        })
}

travel('./src', function (filePath, file) {
    entries[file.replace('.ts', '')] = './' + filePath.replace('\\', '/');
})

//console.log(entries)

// webpack中的所有的配置信息都应该写在module.exports中
module.exports = {
    mode: "development",
    // 指定入口文件
    entry: entries,
    // {
    //     index: "./src/index.ts",
    //     test: "./src/test.ts"
    // }
    // 指定打包文件所在目录
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        // 打包后文件
        filename: "[name].bundle.js"
    },

    // 指定webpack打包时要使用模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test指定的是规则生效的文件
                test: /\.ts$/,
                // 要使用的Loader
                use: 'ts-loader',
                // 要排除的文件
                exclude: /node-modules/
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
};