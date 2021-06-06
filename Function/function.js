/*
  * Problem No. 1) 
*/
console.log("<<<--Problem No 1-->>>");
conversion1 = "CelciusToFarenheit";
conversion2 = "FarenheitToCelcius";

function temperatureConversion(chooseConversion,temperature)
{
    if(chooseConversion == conversion1 &&(temperature>=0 && temperature <=100))
    {
         return (temperature*(9/5)+32);
    }
    else if(chooseConversion == conversion2 &&(temperature >=32 && temperature<=212 )){
        return ((temperature-32)*(5/9));
    }
    else{
        console.log("invalid selection");
    }
}
//celcius to farenheit
 let tempAfterConversion1 = temperatureConversion(conversion1,50);
console.log(tempAfterConversion1);

//farenheit to celcius
let tempAfterConversion2 = temperatureConversion(conversion2,50);
console.log(tempAfterConversion2);
console.log("---------------------------------------");

/*
  * Problem No. 2) 
*/
console.log("<<<--Problem No 2-->>>");
function checkPalindrome(number)
{
    let reversedNumber = 0;
     let numberCopy = number;
     while(numberCopy !=0)
     {
         currentDigit = numberCopy%10;
         reversedNumber = (reversedNumber * 10) + currentDigit; //creating the reversed number
         numberCopy= Math.floor(numberCopy / 10);
     }
     if(number == reversedNumber)
     {
     console.log("palindrome number");
     }
     else
     {
         console.log("not a palindrome");
     }
}
const prompt = require('prompt-sync')();
let checkNumber = parseInt(prompt('Enter a number :'));
checkPalindrome(checkNumber);
console.log("---------------------------------------");

/*
  * Problem No. 3) 
*/
console.log("<<<--Problem No 3-->>>");
function checkPalindrome(number)
{
    let reversedNumber = 0;
     let numberCopy = number;
     while(numberCopy !=0)
     {
         currentDigit = numberCopy%10;
         reversedNumber = (reversedNumber * 10) + currentDigit; //creating the reversed number
         numberCopy= Math.floor(numberCopy / 10);
     }
     if(number == reversedNumber)
     {
     return true;
     }
     else
     {
        return false;
     }
}
console.log("---------------------------------------");

/*
  * Problem No. 4) 
*/
console.log("<<<--Problem No 4-->>>");
function checkPrime(number)
{
    let flag = true;
    for( let i =2;i*i<number;i++)
    {
        if(number%i ==0 )
        {
            flag = false;
            break;
        }
    }
    if(number==1)
    flag= false;
    return flag;     
}

const check = require('prompt-sync')();
let number = parseInt(check('Enter a number :'));

if(checkPalindrome(number)== true && checkPrime(number)== true)
{
    console.log("number is palindrome as well as prime ");
}
 else if(checkPalindrome(number)== true )
{
    console.log("number is palindrome only ");
}
else if(checkPrime(number)== true )
{
    console.log("number is prime only ");
}
else
{
    console.log("number is neither prime nor palindrome");
}