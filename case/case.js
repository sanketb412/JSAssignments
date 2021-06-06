/*
  * Problem No. 1) 
*/
console.log("<<<--Problem No 1-->>>");
const digit = require("prompt-sync")();
let check = parseInt(digit("Enter Single Digit Number: "));
console.log(check);
switch (check){
    case 1:
        console.log(check +" says One");
        break;
    case 2:
        console.log(check +" says Two");
        break;
    case 3:
        console.log(check +" says Three");
        break;
    case 4:
        console.log(check +" says Four");
        break;
    case 5:
        console.log(check +" says Five");
        break;
    case 6:
        console.log(check +" says Six");
        break;
    case 7:
        console.log(check +" says Sevan");
        break;
    case 8:
        console.log(check +" says Eight");
        break;
    case 9:
        console.log(check +" says Nine");
        break;
    default:
        console.log("Enter Valid Singlr Digit Number");
        break;
}
console.log("---------------------------------------");

/*
  * Problem No. 2) 
*/
console.log("<<<--Problem No 2-->>>");
const num = require("prompt-sync")();
let week = parseInt(num("Enter Number to know Week day: "));
console.log(week);
switch (week){
    case 1:
        console.log(week +" says Sunday");
        break;
    case 2:
        console.log(week +" says Monday");
        break;
    case 3:
        console.log(week +" says Tuesday");
        break;
    case 4:
        console.log(week +" says Wednesday");
        break;
    case 5:
        console.log(week +" says Thursday");
        break;
    case 6:
        console.log(week +" says Friday");
        break;
    case 7:
        console.log(week +" says Saturday");
        break;
    default:
        console.log("Enter Valid number")
        break;
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
console.log("1:- Feet to Inch");
console.log("2:- Inch to Feet");
console.log("3:- Feet to Meter");
console.log("4:- Meter to Feet");

const option = require("prompt-sync")();
let selectOption = parseInt(option("Select the options for Conversation: "));

const input = require("prompt-sync")();
let conversion = parseInt(input("Enter Number to Convert: "));
console.log(conversion);
switch (selectOption){
        case 1:
            const FInch = conversion * 12.000;
            console.log(+conversion+" Feet = " + FInch+" Inch");
            break;
        case 2:
            const IFeet = conversion * 0.083333;
            console.log(+conversion+" Inch = " + IFeet+" Feet");
            break;
        case 3:
            const FMeter = conversion / 3.2808;
            console.log(+conversion+" Feet = " + FMeter+" Meter");
            break;
        case 4:
            const MFeet = conversion * 3.2808;
            console.log(+conversion+" Meter = " + MFeet+" Feet");
            break;
        default:
            console.log("Enter Valid Option");
}