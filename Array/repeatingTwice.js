let repeatingDigit = new Array();
for(let i = 1; i < 100; i++)
{
    if(Math.floor(i/10) == i%10)
     repeatingDigit.push(i);
}
console.log("Repeated numbers from 0-100 are: "+repeatingDigit);
