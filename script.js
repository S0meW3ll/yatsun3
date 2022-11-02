let at = prompt();
let  a = parseInt(at.split(' ')[0]);
let  b = parseInt(at.split(' ')[1]);
let  c = parseInt(at.split(' ')[2]);
let p = (a+b+c)/2;
console.log(p*2);
console.log(Math.sqrt(p*(p-a)*(p-b)*(p-c)));