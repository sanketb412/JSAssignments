/*
  *Problem No. 1) Finding Maximum and Minimum Number
*/
console.log("<<<--Problem No 1-->>>");
let num1 = Math.floor(Math.random() * 1000);
console.log(num1);
let num2 = Math.floor(Math.random() * 1000);
console.log(num2);
let num3 = Math.floor(Math.random() * 1000);
console.log(num3);
let num4 = Math.floor(Math.random() * 1000);
console.log(num4);
let num5 = Math.floor(Math.random() * 1000);
console.log(num5);
let Max;
let Min;
//Finding Maximum Number
if(num1 >= num2 && num1 >= num3 && num1 >= num4 && num1 >= num5){
    Max = num1;
    console.log("Maximum Number is: " +Max);
}
else if (num2 >= num1 && num2 >= num3 && num2 >= num4 && num2 >= num5){
    Max = num2;
    console.log("Maximum Number is: " +Max);
}
else if (num3 >= num1 && num3 >= num2 && num3 >= num4 && num3 >= num5){
    Max = num3;
    console.log("Maximum Number is: " +Max);
}
else if (num4 >= num1 && num4 >= num3 && num4 >= num2 && num4 >= num5){
    Max = num4;
    console.log("Maximum Number is: " +Max);
}
else if (num5 >= num1 && num5 >= num3 && num5 >= num4 && num5 >= num2){
    Max = num5;
    console.log("Maximum Number is: " +Max);
}
//Finding Minimum Number
if(num1 <= num2 && num1 <= num3 && num1 <= num4 && num1 <= num5){
    Min = num1;
    console.log("Minimum Number is: " +Min);
}
else if (num2 <= num1 && num2 <= num3 && num2 <= num4 && num2 <= num5){
    Min = num2;
    console.log("Minimum Number is: " +Min);
}
else if (num3 <= num1 && num3 <= num2 && num3 <= num4 && num3 <= num5){
    Min = num3;
    console.log("Minimum Number is: " +Min);
}
else if (num4 <= num1 && num4 <= num3 && num4 <= num2 && num4 <= num5){
    Min = num4;
    console.log("Minimum Number is: " +Min);
}
else if (num5 <= num1 && num5 <= num3 && num5 <= num4 && num5 <= num2){
    Min = num5;
    console.log("Minimum Number is: " +Min);
}
console.log("---------------------------------------");

/*
  * Problem No. 2) 
*/
console.log("<<<--Problem No 2-->>>");
const prompt = require("prompt-sync")();
let Day = parseInt(prompt("Enter Day: "));
let Month = parseInt(prompt("Enter Month: "));
if (Month >= 3 && Day >= 20 || Month <= 6 && Day <= 20){
    console.log(+Day+" Day", +Month+" Month" +" is True");
} else {
    console.log("you have entered Invalid Month and Day");
}
console.log("---------------------------------------");

/*
  * Problem No. 3) 
*/
console.log("<<<--Problem No 3-->>>");
const year = require("prompt-sync")();
let leapYear = parseInt(year("Enter a year to check: "));
const a = leapYear%4;
const b = leapYear%100;
const c = leapYear%400;
if (a == 0 && b != 0 || c == 0){
    console.log(+leapYear + " is a Leap Year");
}
else{
    console.log(+leapYear + " is not a Leap Year");
}
console.log("---------------------------------------");

/*
  * Problem No. 4) 
*/
console.log("<<<--Problem No 4-->>>");
const variable = 1;
let check = Math.floor(Math.random() * 2);
if (check == variable){
    console.log("Heads");
}
else{
    console.log("Tails");
}