// ? 物件格式教學
// 物件
// 描述家庭
let motherName = "Mary";
let father = "Leo";
let dogs = 3;

let home = {
    motherName: "Mary",
    fatherName: "Tom",
    dogs: 3,
    isWakeUp: false
}


// ? 如何讀取物件的值
console.log(home);
console.log(home.motherName);  //尋找變數裡面的哪個屬性
console.log(home.dogs);
let tomDogs = home.dogs;
console.log(tomDogs);


// ? 新增物件屬性
let home1 = {};
home1.motherName = "Mary";
home1.dogs = 5;
home1.isWakeUp = true;
console.log(home1);


// ? 修改物件值
let home2 = {
    motherName: "Mary",
    fatherName: "Tom",
    dogs: 3,
    isWakeUp: false
}
home2.motherName = "Jane";
home2.dogs +=1;
home2.dogs = home2.dogs + 1;
console.log(home2);


// ? 刪除物件資料
let home3 = {
    motherName: "Mary",
    fatherName: "Tom",
    dogs: 3,
    isWakeUp: false
}
delete home3.dogs;
delete home3.motherName;
console.log(home3);
console.log(home3.motherName);  //undefined 因為被刪掉了。


// ? 另一種讀取物件屬性方法
let home4 = {
    motherName: "Mary",
    fatherName: "Tom",
    dogs: 3,
    isWakeUp: false
}
console.log(home4['motherName']);
let a = 'fatherName';
console.log(home4[a]);


// ? 物件讀取資料判斷時間
let home5 = {
    motherName: "Mary",
    fatherName: "Tom",
    dogs: 3,
    isWakeUp: false,
    "001" : "Hello"
}
console.log(home5.motherName);
console.log(home5['001']);  //JSON格式的資料，屬性名稱可以是數字，但是要用字串的方式讀取。