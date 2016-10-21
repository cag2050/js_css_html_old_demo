/**
 * Created by chenanguo on 2016/9/27.
 */
define(function () {
    var add = function (x, y) {
        return x + y;
    };
    // 返回可以调用的模块，冒号前是给模块方法取的名字
    return {
        add1: add
    };
    // 以下引用是错误的
    // return add;
});