//Problem 1a:- Generating 10 Random 3 Digit Numbers and storing in a Array.

let threeDigitNumbersArr = new Array();

for(let i = 0; i < 10; i++)
{
    let number = Math.floor(Math.random() * 900 + 100);
    threeDigitNumbersArr.push(number);
}
console.log(threeDigitNumbersArr);

let secondLargest = threeDigitNumbersArr[0];

let largest = threeDigitNumbersArr[0];

let secondSmallest = threeDigitNumbersArr[0];

let smallest = threeDigitNumbersArr[0];


// Finding 2nd Largest and 2nd Smallest element
for(let i = 1; i < 10; i++)
{
    if(secondLargest<threeDigitNumbersArr[i])
    {
        if(largest<threeDigitNumbersArr[i])
        {
            secondLargest = largest;
            largest = threeDigitNumbersArr[i] 
        }
        else
        {
            secondLargest = threeDigitNumbersArr[i];
        }
    }

    if(secondSmallest>threeDigitNumbersArr[i])
    {
        if(smallest>threeDigitNumbersArr[i])
        {
            secondSmallest = smallest;
            smallest = threeDigitNumbersArr[i] 
        }
        else
        {
            secondSmallest = threeDigitNumbersArr[i];
        }
    }
}

console.log("Second largest value is : "+secondLargest);
console.log("Second smallest value is : "+secondSmallest);

//Problem 1b:- Finding Second largest & Second smallest numbers by Sorting the array

let sortArray = threeDigitNumbersArr.sort();

console.log("Second largest value by using array is: " + sortArray[sortArray.length-2]);
console.log("Second smallest value by using array is: "+sortArray[1]);

//Problem 1c:- storing Prime Factors of an number in an array

let primeFactorArr = new Array();
let number = Math.floor(Math.random() * 100000);
console.log("let Number be: "+number);
    
for (let i = 2; i <= number/2; i++) {
    let x = true;
    for (let j = 2; j <= i / 2; j++) {
        if (i % j == 0 ) {
            x = false;
            break;
        }
    }
    if (x == true && number % i == 0)
        primeFactorArr.push(i);
}
console.log("And The Prime factors of number "+number + " are: "+primeFactorArr);