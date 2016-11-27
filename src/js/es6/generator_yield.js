/**
 * Created by chenanguo on 2016/10/21.
 */
// 引入babel-polyfill或babel-plugin-transform-runtime（此处引入babel-polyfil），否则使用Generator会报错：Uncaught ReferenceError: regeneratorRuntime is not defined
import 'babel-polyfill';

function* helloWordGenerator() {
    yield "hello";
    yield "world";
    return "ending";
}

let g = helloWordGenerator();
let first = g.next();
console.info("first.value = " + first.value); // first.value = hello
console.info("first.done = " + first.done); // first.done = false
let second = g.next();
console.info("second.value = " + second.value); // second.value = world
console.info("second.done = " + second.done); // second.done = false
let third = g.next();
console.info("third.value = " + third.value); // third.value = ending
console.info("third.done = " + third.done); // third.done = true