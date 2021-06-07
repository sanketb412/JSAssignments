
let arrNumber = [3,4,-8,7,-7,1];
let lengthOfArray=arrNumber.length;
let check = false;
for (let i = 0; i < lengthOfArray-2; i++) 
    { 
        for (let j = i+1; j < lengthOfArray-1; j++) 
        { 
            for (let k = j+1; k < lengthOfArray; k++) 
            { 
                if (arrNumber[i]+arrNumber[j]+arrNumber[k] == 0) 
                { 
                    console.log("Three Numbers are ("+arrNumber[i]+","+arrNumber[j]+","+arrNumber[k]+")" );
                    check = true; 
                } 
            } 
        } 
    } 
if(check == false)
{
    console.log("bot such three numbers found");
}