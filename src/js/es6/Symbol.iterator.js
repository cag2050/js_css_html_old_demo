/**
 * Created by chenanguo on 2016/10/24.
 */
let str ="12345";
let iterator = str[Symbol.iterator]();
console.log(iterator.next().value);

let arr = ["aaa","bbb","ccc"];
let iterator2 = arr[Symbol.iterator]();
console.log(iterator2.next().value);
