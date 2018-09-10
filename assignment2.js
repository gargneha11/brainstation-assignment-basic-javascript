var i,j;
j='';

for (i=0; i<=6; i++)
{
    j = j +'#';
    console.log(j);
}
/* declare two variables i and j. 
i is for looping purpose
j is used as a variable which is assigned an empty string
for loop is started where loop will continue till 7 times and it will increment by 1
concatenation of emty string and # symbol is done so that it automatically goes to next line and then that value is stored again in j and it is printed, 
so this loop will continue till we get # symbol 7 times
the value in j will be printed each time for 7 times till the loop ends. */

function isEven(number)
{
    if (number % 2==0)
    {
        console.log("number is even");

    }
    else if (!number % 2 == 0)
    {
        console.log("number is odd");
    }
    else{
        console.log ("it is not a number");
    }
}
/* function isEven is used to for showing number is even or odd
number variable has been taken and if condition is applied on it
if remainder of number (dividing the number by 2)  is 0 then it will print number is even else number is odd
and in the end if u input anything other than number then it will print it is not a number
*/