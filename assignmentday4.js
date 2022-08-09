/* if else statements
a. use your example from yesterday's assignment and using that example find the average of your marks
b. if you get more than 33 console "Fail"
c. if you get more than 40 console "Third Division"
d. if you get more than 55 console "Second Division"
e. if you get more than 60 console " First Division"

// Do the above question using nester if else 

// console the values from 1 to 10*/

let english = 50;
let accountancy = 41;
let business = 50;
let economics = 40;
let incomeTax = 40;
 let marks = english + accountancy + business + economics + incomeTax;
console.log(marks);
let averageMarks = (marks/5);
console.log(averageMarks);
if (english<=33||accountancy<=33||business<=33||economics<=33||incomeTax<=33)
console.log("fail");
else if (averageMarks < 33) 
    console.log('fail');

else if (averageMarks > 33 && averageMarks<=50) {
       console.log('ThirdDivision') 
     } else if  (averageMarks > 50  && averageMarks <= 59) {
            console.log('secondDivision')
    }   else if (averageMarks >= 60) {
    console.log('FirstDivision')
}
/*/ If... else
1. WAP to find maximum between two numbers.
2. WAP to check whether a number is divisible by 5 and 11 or not.
3. WAP to check whether a number is even or odd.
// for
4. WAP to calculate the sum of first 10 natural number.
5. WAP to display the cube of the number upto 5
    cube of the 1 is :1
    cube of the 2 is :8
    cube of the 3 is :27
    cube of the 4 is :64
    cube of the 5 is :125*/

let num=3;
for (let i = 1; i <=5; ++i ) {
    console.log(`cube of the ${i} is : ${i**num}`)
}


const n = 10;
for (const i = 1; i <=10; ++i ) {
    console.log(i+n)
} 
 
//
let number = 99;
const  z=100;
 if (number < z ) {
    console.log("maximum");  
 }
else {
    console.log("minimum");
}

/*const m = 11;
if(m/5) {
    console.log("yes")
}
else (m/11)   
    console.log('no')*/

