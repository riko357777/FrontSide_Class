// ? 為什麼要理解流程判斷？
let todayDegrees = 20;
let isWearJacket = 15 >= todayDegrees;

if(15 >= todayDegrees){
    console.log("小美穿著外套");
    console.log("她準備出門了");
}else{
    console.log("外面太熱了，所以小美不穿外套");
}


// ? if、else、else if 講解
// ? if 詳細講解 (一)
//if、else一組 else if
let wallet = 79;
if(wallet >= 110){
    console.log("小明跑去吃牛肉麵了");
}else if(wallet >= 80){
    console.log("小明跑去夜市牛排了");
}else if(wallet >= 35){
    console.log("小明跑去吃薯條了！");
}else{
    console.log("小明錢不夠，跑回家吃飯了");
}


// ? if 詳細講解 (二)
let todayWeater = "天災";
if(todayWeater === "沒有下雨"){
    console.log("小華不帶雨具");
}else if(todayWeater == "毛毛雨"){
    console.log("帶了輕便雨衣");
}else if(todayWeater == "普通的雨"){
    console.log("帶了折傘");
}else if(todayWeater == "颱風豪雨"){
    console.log("帶長傘");
}else{
    console.log("小華遇到異常狀態");
}