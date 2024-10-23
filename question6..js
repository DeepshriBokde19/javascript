let a=20;
let b=10;
// swap using third variable
const temp=a;
a=b;
b=temp;
console.log("after swap  a is " + a);
console.log("after swap  b is "+ b);


// without third variable
let c=20;
let d=10;
c=c+d;
// c=30
d=c-d;
// c=30-10
c=c-d;
console.log("after swap c" +c )
console.log("after swap d "+ d)