/**
 * Created by chenanguo on 2016/10/25.
 */
let map1 = new Map();
map1.set('name','cag');
map1.set('age','30');

console.log(map1.get("age"));
console.log(map1);

for(let i of map1.values()){
    console.log(i);
}