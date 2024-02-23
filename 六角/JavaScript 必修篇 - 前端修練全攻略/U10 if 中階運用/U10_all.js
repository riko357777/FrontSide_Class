// ? if 包 if 腰圍判斷 Code 設計
let sex = "male";
let cm = 99;

if (sex == "male") {
    if (cm >= 90) {
        console.log("男生體型過胖");
    } else {
        console.log("男生體型正常");
    }
} else if (sex == "woman") {
    if (cm >= 80) {
        console.log("女生體型過胖");
    } else {
        console.log("女生體型正常");
    }
} else {
    console.log("您的資料錯誤");
}
console.log("程式結束");


// ? 看圖說故事 - if 練習一
let myDegree = 36;
if (myDegree >= 37.5) {
    console.log("您不得進入");
} else {
    console.log("您可以進入");
}
console.log("程式結束");


// ? 看圖說故事 - if、else if 練習二
let myScore = 50;
if (myScore >= 60) {
    console.log("您的成績及格了");
} else {
    console.log("您的成績不及格");
}
console.log("程式結束");


// ? 看圖說故事 - if、else if 練習三
let Score = 50;
if (Score >= 80) {
    console.log("優秀");
}else if(Score >= 60 && Score < 80){
    console.log("普通");
}else{
    console.log("不及格");
}