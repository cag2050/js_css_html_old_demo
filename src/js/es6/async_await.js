/**
 * Created by chenanguo on 2016/10/24.
 */
import "babel-polyfill";

function timeOut(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    })
}

async function outputValue(str, ms) {
    await timeOut(ms);
    console.log(str);
}

outputValue("hello world", 5000);