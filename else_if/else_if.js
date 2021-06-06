/*
  * Problem No. 1) 
*/
console.log("<<<--Problem No 1-->>>");
const digit = require("prompt-sync")();
let check = parseInt(digit("Enter Single Digit Number: "));
console.log(check);
if ( check == 1){
    console.log(check +" says One");
}
else if(check == 2){
    console.log(check +" says Two");
}
else if(check == 3){
    console.log(check +" says Three");
}
else if(check == 4){
    console.log(check +" says Four");
}
else if(check == 5){
    console.log(check +" says Five");
}
else if(check == 6){
    console.log(check +" says Six");
}
else if(check == 7){
    console.log(check +" says Seven");
}
else if(check == 8){
    console.log(check +" says Eight");
}
else if(check == 9){
    console.log(check +" says Nine");
}
else{
    console.log("Enter Valid Single Digit Number to get in Words")
}
console.log("---------------------------------------");

/*
  * Problem No. 2) 
*/
console.log("<<<--Problem No 2-->>>");
const num = require("prompt-sync")();
let week = parseInt(num("Enter Number to know Week day: "));
console.log(week);
if ( week == 1){
    console.log(week +" says Sunday");
}
else if(week == 2){
    console.log(week +" says Monday");
}
else if(week == 3){
    console.log(week +" says Tuesday");
}
else if(week == 4){
    console.log(week +" says Wednesday");
}
else if(week == 5){
    console.log(week +" says Thursday");
}
else if(week == 6){
    console.log(week +" says Friday");
}
else if(week == 7){
    console.log(week +" says Saturday");
}
else{
    console.log("Enter Valid number")
}
console.log("---------------------------------------");

/*
  * Problem No. 3) 
*/
console.log("<<<--Problem No 3-->>>");
const digitPlace = require("prompt-sync")();
let place = parseInt(digitPlace("Enter Number Three Digit Number: "));
console.log(place);
if (place < 1000){
    let h = Math.floor(place/100)%10;
    let t = Math.floor(place/10)%10;
    let u = Math.floor(place/1)%10;

    console.log("Digit "+u +" is in Unit Place");
    console.log("Digit "+t +" is in Tens Place");
    console.log("Digit "+h +" is in Hundred Place");
}
else{
    console.log("Enter 3 digit number only");
}
console.log("---------------------------------------");

/*
  * Problem No. 4) 
*/
console.log("<<<--Problem No 4-->>>");

const a = 9;
const b = 7;
const c = 2;

let arithmeticEqu1 = a + (b * c);
let arithmeticEqu2 = (a / b) + c;
let arithmeticEqu3 = (a % b) + c;
let arithmeticEqu4 = (a * b) + c;

//Finding Maximum Number
if(arithmeticEqu1 >= arithmeticEqu2 && arithmeticEqu1 >= arithmeticEqu3 && arithmeticEqu1 >= arithmeticEqu4 ){
    Max = arithmeticEqu1;
    console.log("Maximum Number is: " +Max);
}
else if (arithmeticEqu2 >= arithmeticEqu1 && arithmeticEqu2 >= arithmeticEqu3 && arithmeticEqu2 >= arithmeticEqu4 ){
    Max = arithmeticEqu2;
    console.log("Maximum Number is: " +Max);
}
else if (arithmeticEqu3 >= arithmeticEqu1 && arithmeticEqu3 >= arithmeticEqu2 && arithmeticEqu3 >= arithmeticEqu4 ){
    Max = arithmeticEqu3;
    console.log("Maximum Number is: " +Max);
}
else if (arithmeticEqu4 >= arithmeticEqu1 && arithmeticEqu4 >= arithmeticEqu3 && arithmeticEqu4 >= arithmeticEqu2 ){
    Max = arithmeticEqu4;
    console.log("Maximum Number is: " +Max);
}
//Finding Minimum Number
if(arithmeticEqu1 <= arithmeticEqu2 && arithmeticEqu1 <= arithmeticEqu3 && arithmeticEqu1 <= arithmeticEqu4 ){
    Min = arithmeticEqu1;
    console.log("Minimum Number is: " +Min);
}
else if (arithmeticEqu2 <= arithmeticEqu1 && arithmeticEqu2 <= arithmeticEqu3 && arithmeticEqu2 <= arithmeticEqu4 ){
    Min = arithmeticEqu2;
    console.log("Minimum Number is: " +Min);
}
else if (arithmeticEqu3 <= arithmeticEqu1 && arithmeticEqu3 <= arithmeticEqu2 && arithmeticEqu3 <= arithmeticEqu4 ){
    Min = arithmeticEqu3;
    console.log("Minimum Number is: " +Min);
}
else if (arithmeticEqu4 <= arithmeticEqu1 && arithmeticEqu4 <= nuarithmeticEqu3 && arithmeticEqu4 <= arithmeticEqu2 ){
    Min = arithmeticEqu4;
    console.log("Minimum Number is: " +Min);
}
console.log("---------------------------------------");