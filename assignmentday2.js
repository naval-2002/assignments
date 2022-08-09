/* Arithmetic operator
a. create two variable a and b. The values of each are 5 and 3 respectively.
b. the sum of two number
c. subtraction of two numbers
d. multiplication
e. division
f. remainder
g. incremented like this then what would be the difference(++value, value++)
h. decremented like this then what would be the difference(--value, value--)
i. exponentiation*/

const a = 5;
const b = 3;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(b%a);
console.log(a**b);


/* ternary operator
a. take marks of 5 subjects and calculate the total and the percentage of the student;
b. if the student is pass then console pass and if not console fail*/

let english = 50;
let accountancy = 70;
let business = 79;
let economics = 30;
let incomeTax = 20;
 let marks = english + accountancy + business + economics + incomeTax;
console.log(marks);
const per = marks*1/5;
console.log(per);
(per > 55) ? console.log('pass') : console.log('fail')
/*
 * // assigment 
    a. Make variables for your name, hobby, place, etc.
    b. create your introduction using values from these variables using template literals.
    c. console the intoduction.
 */
const mName = 'Naval';
const hobby = 'Playing games';
const place = 'Kotdwara';
const age = '20';
const language ='hindi';

const tMessage = `My name is ${mName}. My hobby is ${hobby}. I live in ${place}. I am ${age}years old. I speak in ${language} language.`;
console.log(tMessage);
