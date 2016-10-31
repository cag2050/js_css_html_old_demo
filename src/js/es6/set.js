/**
 * Created by chenanguo on 2016/10/25.
 */
// Set没有重复的值
var s = new Set();

[11, 22, 33, 44, 1, 2].map(x => s.add(x));

for (let i of s.entries()) {
    console.log(i);
}
s.forEach( j => console.log(j));