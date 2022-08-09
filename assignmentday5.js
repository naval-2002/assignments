//1. WAP to display first 20 natural number and their num
// o/p => The first 20 natural number are : 1 2 3 4 5 6 .... 20
// the total is : 
/*
console.log("the first 20 natural number are :")
let n=0;
for (let i=1; i<21; ++i) {
    console.log(n,i)
n+=i
}
console.log("the total is:",n);*/

/*write a javascript program to sort three numbers 
numbers :: 3, -7, 2
 o/p => -7, 2, 3 or 3, 2, -7*/
/*
 let a = [3, -7, 2]
 let asscendingnumber = */

// Check if input variable is a number or not
 const number = "5";
 /*if (number === numericvalue ) {
  console.log("it is number")
 }
else  {
 console.log("it is not a number")
 }*/

 const side1 = 10;
 const side2 = 10;
 const side3 =10;
 if (side1 === side2 && side1 === side3 && side2 === side3) {
  console.log("equilator")
 }
 else if (side2 === side3 ||side1 ===side2 || side1 === side3 ) {
  console.log("isosceles")
 }
 else {
  console.log("scelene")
 }
