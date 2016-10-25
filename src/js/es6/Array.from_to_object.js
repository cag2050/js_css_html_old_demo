/**
 * Created by chenanguo on 2016/10/24.
 */
let arrayLike = {name: "jeff", age: 30};
for (let f in arrayLike) {
    // for...in遍历对象键名，es5标准。为遍历对象而设计
    console.log("for in = "+arrayLike[f]);
}
// Object.keys将对象的键名生成了一个数组。
for(let m of Object.keys(arrayLike)){
    // for...of遍历对象键值，es6标准。多用于遍历数组
    console.log("for of = "+arrayLike[m]);
}