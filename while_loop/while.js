/*
  * Problem No. 1) 
*/
console.log("<<<--Problem No 1-->>>");
const num = require("prompt-sync")();
let n = parseInt(num("Enter the value n: "));

console.log("printing table");
let twoPowerN = 1;
console.log( "value for power : 0  is  = "+ twoPowerN );
let i =1;
while(i<=n && twoPowerN <256)
{
     i++;
     twoPowerN = twoPowerN*2; 
console.log( "value for power : "+i + "  is  = "+ twoPowerN );
}
console.log("final value : "+twoPowerN);
let count = 0;
console.log("---------------------------------------");

/*
  * Problem No. 3) 
*/
console.log("<<<--Problem No 3-->>>");
let head =0;
let headCount =0;
let tailCount =0;
while(headCount<11 && tailCount<11)
{
 let tossResult = Math.floor(Math.random()*10)%2;
if(tossResult == head)
{
    headCount++;
}
else{
    tailCount++;
}
}
if(headCount == 11)
{
    console.log("Reached head 11 times first");
}
else{
    console.log("Reached tail 11 times first");
}
console.log("---------------------------------------");

/*
  * Problem No. 4) 
*/
console.log("<<<--Problem No 4-->>>");
let money =100;
let win =0;
while(money>0 && money<200)
{
    let gamblingResult = Math.floor(Math.random()*10)%2;
if(gamblingResult == win)
{
    console.log("It's win");
    money++;
    console.log(money);
}
else{
    console.log("It's loss");
    money--;
    console.log(money);
}
}
if(money == 0)
{
    console.log("no more money to gamble");
}
else{
    console.log("gambler reached goal");
}