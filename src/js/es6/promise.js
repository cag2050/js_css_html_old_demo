/**
 * Created by chenanguo on 2016/10/24.
 */
function testPromise(ready) {
    return new Promise(function (resolve, reject) {
        if (ready) {
            // resolve和reject是2个函数，由js提供，不用自己写
            // 将异步操作的结果传递出去
            resolve("执行正确");
        }
        else {
            reject("执行错误");
        }
    })
}
// testPromise()产生Promise对象，然后then处理resolve和reject传递出来的内容
testPromise(true).then(function (success) {
    console.log(success);
}, function (error) {
    console.log(error);
});