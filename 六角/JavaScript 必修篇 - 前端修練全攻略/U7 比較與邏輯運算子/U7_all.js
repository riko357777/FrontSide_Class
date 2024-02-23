// ? 比較運算子： >、=、<=
console.log(3>2);


// ? 比較運算子搭配變數方法
let a = 2>1;
console.log(a);
let isWakeup = false;
console.log(isWakeup);


// ? =、== 差異講解
// 一個 = 賦予值的意思
let b = 1;
// 兩個 == 比較值的意思
let c = 2;
console.log("=、== 差異講解" + (b==c));


// ? ==、=== 差異講解
let d = 1;
let e = "1";
//兩個 == ，會自動轉換資料型態，因此會是true
console.log("==、=== 差異講解" + (d==e));
//三個 === ，會比較也會看型別
console.log(d===e);
// 不等於也是同理
console.log(d!=e);
console.log(d!==e);


// ? 邏輯運算子介紹  &&、||
// && 同時滿足條件 、 || 滿足其中一個條件
let f = 1;
let g = 2;
console.log(f==1 && g==2);
let h = 1;
let i = 2;
console.log(h==1 || i==3);


// ? 邏輯運算子範例情境
let j = 600;
let isVip = true;
console.log(j>=500 && isVip==true);
//練習題
let haveRice = false;
let haveApple = false;
console.log(haveRice==true || haveApple==true);