// ? 陣列不只能放字串，也能放數字與混合資料
let ary = ['blue',5,false];   
console.log(ary);

let books = [5,30,400,100];
console.log(books);

let data = [];  //可以宣告一個空陣列
console.log(data);


// ? 陣列讀取教學
let colors = ['blue','red','black','pink'];
console.log(colors[0]);  //讀取第一個陣列
console.log(colors[1]);  //讀取第二個陣列


// ? 讀取陣列資料，並賦予新變數流程
let liaoLikeColor = colors[2];
console.log(liaoLikeColor);


// ? length 讀取陣列長度流程
console.log(colors.length);  //讀取陣列長度
let colorsNum = colors.length;
console.log(colorsNum);


// ? 陣列預設寫入資料
let color = [];
//寫入
color[0] ='blue';
color[1] ='red';
color[2] ='pink';

color[4] ='black';
console.log(color);
console.log(color.length);


// ? push 寫入資料流程
let color1 = ['blue','red','black'];
color1.push('3'); //push會寫入在陣列最後面
color1.push('pink');
color1.push('yellow');
console.log(color1);


// ? unshift 寫入資料流程
let color2 = ['blue','red','black'];
color2.unshift('pink'); //unshift會寫入在陣列最前面
console.log(color2);


// ? pop 與 shift 刪除資料
let color3 = ['blue','red','black'];
//新增 => push、unshift
//刪除 => pop、shift
color3.pop(); //刪除最後一筆資料
color3.shift(); //刪除第一筆資料
console.log(color3);


// ? splice 刪除指定資料
let color4 = ['blue','red','black'];
color4.splice(1,1); //splice(開始位置,刪除幾個)
console.log(color4);