// ? undefined 介紹
let a;
a = 1;
console.log(a);
console.log(typeof a);
//兩個都會回報undefined，因為a沒有被賦予任何值


// ? null 介紹
let b = 1;
let c = 1234;
c = null;
console.log(c);     //有被賦予值，但告知為空值


// ? 字串轉數字方法
let e = "1";
e = parseInt(e);    //parseInt()方法，將字串轉為數字
console.log(e+1);


let f = "1";
f = f.toString();   //toString()方法，將數字轉為字串
console.log(f+1);
console.log(typeof f);
// 如果是在inpuet裡面的字元都會是字串，因此要轉換成數字才能做運算