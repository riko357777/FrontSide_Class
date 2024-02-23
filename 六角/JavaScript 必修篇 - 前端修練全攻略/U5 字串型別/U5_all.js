let a = 'hello'
let b = '你好嗎？'
let c = 18;
console.log(a,b,c);

let friendName = '小明';
let content = '你好嗎？';
let total = friendName+' '+content;
console.log(total);

//typeof 顯示資料型態 字串是string 數字是number
console.log(typeof friendName);
console.log(typeof c);

//js會自動轉換資料型態
console.log(typeof total);
console.log(friendName + a + "，" + b + "我今年剛滿" + c + "歲");


// ? NaN產生時機
//字串乘數字 = NaN
let ac = a * c;
console.log(ac);
console.log(typeof ac);
//這樣寫出來會是字串的意思
let age = "18";
console.log(age);
console.log(typeof age);
//因此可以用Number()轉換成數字
let age2 = Number(age);
console.log(age2);
console.log(typeof age2);
//也可以用parseInt()轉換成數字
let age3 = parseInt("18");
console.log(age3);
console.log(typeof age3);
//若把字串轉換成數字會是NaN
let age4 = parseInt("你好嗎？");
console.log(age4);
console.log(typeof age4);


// ? 字串處理實用方法
// 字串的處理方式、方法，JS本身有很多語法
//這樣可以顯示出字串裡面有幾個字元
console.log(a.length);
//這樣可以把字串裡面的空白濾掉
let email = "    g@gmail.com";
console.log(email.trim());


// ? 變數記憶體指向講解
let myEmail = '   Tom1'   ;
let nameLength = myEmail.length;
let updateEmail = myEmail.trim();

console.log(updateEmail);
console.log(myEmail);
console.log(nameLength); //空格也算一個字元

//使用這樣也可以濾掉空白
let myEmail2 = '   Tom2'   ;
console.log(myEmail2.trim());
console.log(myEmail2);      //但是這樣不會改變原本的變數內容

let myEmail3 = '   Tom3'   ;
myEmail3 = myEmail3.trim();
console.log(myEmail3);      //這樣才會改變原本的變數內容


// ? 樣板字面值教學 (Template Literals)
let myName = 'Leo';
let myAge = 18;
let content2 = `你好，我是${myName}，我今年${myAge}歲`;

console.log(content2);

