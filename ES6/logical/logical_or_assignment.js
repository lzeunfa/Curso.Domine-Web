let v1 = 10;
let v2 = null;
let v3 = 0;
let v4 = '';
let v5 = 'String';

v1 ||= 50;
v2 ||= 50;
v3 ||= 50;
v4 ||= 50;
v5 ||= 50;

console.log(v1);
console.log(v2);
console.log(v3);
console.log(v4);
console.log(v5);