/**
 * Created by chenanguo on 2016/9/29.
 */
var path = require("path"),
    fs = require("fs");
jsEs6 = "/js/es6/";

// 获得es6文件夹下的js文件
var getJsFiles = function () {
    var jsPath = path.resolve("src") + jsEs6;
    // console.log(jsPath);
    var dirs = fs.readdirSync(jsPath);
    var matchs = [],
        files = {},
        all = [];
    dirs.forEach(function (item) {
        matchs = item.match(/(.+)\.js$/);
        var _path = '';
        if (matchs) {
            _path = path.resolve("src" + jsEs6, item);
            files[matchs[1]] = _path;
            all.push(_path);
        }
    });
    return files;
};

var config = {
    // entry: getJsFiles(),
    entry: "./src/js/es6/demo.js",
    //entry: "./src/js/es6/demo.js",
    output: {
        path: "./build/js/es6",
        // path: path.join(__dirname, "build" + jsEs6),
        // filename: "[name].js"
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: "/node-modules/",
                loader: "babel",
                query: {
                    presets: ["es2015"]
                }
            }
        ]
    }
};
// console.log(config);
module.exports = config;