/**
 * Created by chenanguo on 2016/10/21.
 */
console.log(222);

function* helloWordGenerator(){
    yield "hello";
    yield "world";
    return "ending";
}

var g = helloWordGenerator();
g.next();